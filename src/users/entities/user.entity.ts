import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
  password: string;
  age?: number | null;
}
