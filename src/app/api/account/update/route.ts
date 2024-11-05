import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  const email = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
    select: { stripeAccountId: true },
  });

  const accountLink = await stripe.accountLinks.create({
    account: `${user?.stripeAccountId}`,
    refresh_url: "http://localhost:3000/",
    return_url: "http://localhost:3000/",
    type: "account_update",
  });

  return Response.json({ url: accountLink.url });
}
