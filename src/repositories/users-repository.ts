import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>

  create(data: Prisma.UserCreateInput): Promise<User>
}

// import { Prisma, User } from '@prisma/client'

// export interface UsersRepository {
//   findById(id: string): Promise<User | null>
//   findByEmail(email: string): Promise<User | null>
//   create(data: Prisma.UserCreateInput): Promise<User>
// }
