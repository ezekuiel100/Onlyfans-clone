import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, email, fullName, username } = await req.json();

  const user = await prisma.user.upsert({
    where: { email },
    update: { email, name: fullName, username },
    create: { id: userId, email, name: fullName, username, password: "" },
  });

  return NextResponse.json({
    message: "Usuário sincronizado com sucesso",
    user,
  });
}
