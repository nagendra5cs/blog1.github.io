import { PrismaClient } from '@prisma/client'
const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV === 'development') global.prisma = prisma
export default prisma

// model User {
//   id       String  @id @default(cuid())
//   email    String  @unique
//   password String 
//   name     String?
// }