import prisma from "@/lib/prisma";

export async function GET() {
  const allUsers = await prisma.user.findMany();
  return Response.json(allUsers);
}