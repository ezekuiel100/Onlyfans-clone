import { prisma } from "@/lib/prisma";
import fs from "fs";

export async function POST(request: Request) {
  const res = await request.json();

  let base64Data, fileBuffer, mediaType, filePath;

  if (res.file) {
    base64Data = res.file.split(",")[1];

    fileBuffer = Buffer.from(base64Data, "base64");

    mediaType = res.file.slice(5, 10);

    const path = `public/${mediaType}s/` + res.fileName;

    fs.writeFileSync(path, fileBuffer);

    filePath = `${mediaType}s/${res.fileName}`;
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
