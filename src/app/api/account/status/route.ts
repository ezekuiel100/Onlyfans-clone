import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  const email = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
    select: { stripeAccountId: true },
  });

  if (!user?.stripeAccountId) {
    return Response.json({ isAccountComplete: false });
  }

  const account = await stripe.accounts.retrieve(user?.stripeAccountId);
  const isAccountComplete = account?.requirements?.currently_due?.length === 0;

  return Response.json({ isAccountComplete });
}
