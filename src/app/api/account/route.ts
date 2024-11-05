import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const email = await req.json();
    const origin = req.headers.get("origin");

    const user = await prisma.user.findUnique({
      where: { email },
      select: { stripeAccountId: true },
    });

    let account = { id: user?.stripeAccountId };

    if (!user?.stripeAccountId) {
      account = await stripe.accounts.create({ type: "express" });

      await prisma.user.update({
        where: { email },
        data: { stripeAccountId: account.id },
      });
    }

    const accountLink = await stripe.accountLinks.create({
      account: `${account.id}`,
      refresh_url: `${origin}/refresh/${account.id}`,
      return_url: `${origin}`,
      type: "account_onboarding",
    });

    return Response.json({ url: accountLink.url });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" });
  }
}
