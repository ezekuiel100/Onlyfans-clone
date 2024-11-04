import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  const email = await req.json();
  const origin = req.headers.get("origin");

  const user = await prisma.user.findUnique({
    where: { email },
    select: { stripeAccountId: true },
  });

  if (user?.stripeAccountId) {
    return Response.json({
      message: "Account already has payment information.",
    });
  }

  const account = await stripe.accounts.create({});

  await prisma.user.update({
    where: { email },
    data: { stripeAccountId: account.id },
  });

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${origin}/refresh/${account.id}`,
    return_url: `${origin}/return/${account.id}`,
    type: "account_onboarding",
  });

  return Response.json({ url: accountLink.url });
}
