import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/utils";

export async function POST(req: Request) {
  const email = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
    select: { stripeAccountId: true },
  });

  if (!user?.stripeAccountId)
    return Response.json({ message: "User doesn't exist" });

  const loginLink = await stripe.accounts.createLoginLink(
    user?.stripeAccountId
  );

  return Response.json({ url: loginLink.url });
}
