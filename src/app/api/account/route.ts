import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  const email = await req.json();

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

  const newUser = await prisma.user.update({
    where: { email },
    data: { stripeAccountId: account.id },
  });

  return Response.json(newUser);
}
