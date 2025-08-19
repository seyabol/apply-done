// 3. 👨‍💼 Admin Panel Actions"use server"
import prisma from "@/app/lib/db"
import { auth } from "@/auth"

export async function updateRequestStatus(requestId: number, status: "approved" | "rejected", note?: string) {
  const session = await auth()
  if (!session?.user?.admin) {
    throw new Error("Forbidden")
  }

  await prisma.request.update({
    where: { id: requestId },
    data: { status, note },
  })
}

export async function deleteRequest(requestId: number) {
  const session = await auth()
  if (!session?.user?.admin) throw new Error("Forbidden")
  await prisma.request.delete({ where: { id: requestId } })
}

export async function getAllRequests() {
  const session = await auth()
  if (!session?.user?.admin) throw new Error("Forbidden")
  return prisma.request.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  })
}