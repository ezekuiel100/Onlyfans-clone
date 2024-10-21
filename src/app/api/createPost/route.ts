import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const res = await request.json();

  let base64Data, fileBuffer, uploadDir, filePath, mediaType;

  if (res.file) {
    base64Data = res.file.split(",")[1];

    fileBuffer = Buffer.from(base64Data, "base64");

    uploadDir = path.join(process.cwd(), "/src/data/image");
    filePath = path.join(uploadDir, res.fileName);

    fs.writeFileSync(filePath, fileBuffer);

    mediaType = res.file.slice(5, 10);
  }

  await prisma.post.create({
    data: {
      text: res.content,
      mediaType,
      mediaUrl: filePath,
      authorId: res.id,
    },
  });

  return Response.json({ message: "created" });
}
