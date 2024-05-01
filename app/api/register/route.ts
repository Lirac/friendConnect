import { client } from "@/lib/prisma";

export async function POST(request: Request): Promise<Response> {
  const { username, email } = await request.json();
  const data = await client.user.create({
    data: {
      username,
      email,
    },
  });

  if (data) {
    return Response.json(data);
  }
  return Response.json({ message: "Error inserting data" });
}
