import { NextResponse } from "next/server";
import { client } from "@/lib/prisma";

export async function POST(request: Request): Promise<Response> {
  const { content, authorId } = await request.json();
  const data = await client.post.create({
    data: {
      content,
      authorId,
    },
  });

  if (data) {
    return Response.json(data);
  }
  return Response.json({ message: "Error inserting data" });
}

export async function GET(): Promise<Response> {
  const posts = await client.post.findMany({
    include: {
      author: true,
    },
  });
  return NextResponse.json(posts);
}
