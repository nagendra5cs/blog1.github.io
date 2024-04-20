import prisma from "@/lib/prisma";

export async function GET() {
  const allUsers = await prisma.list.findMany();
  return Response.json(allUsers);
}
