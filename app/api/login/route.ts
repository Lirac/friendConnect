import { client } from "@/lib/prisma";

export async function GET(request: Request): Promise<Response | null> {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const user = await client.user.findUnique({
    where: { email: email as string },
  });

  if (user) {
    return Response.json({ ...user });
  }
  return new Response("User does not exists", { status: 400 });
}
