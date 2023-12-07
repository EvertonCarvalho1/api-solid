import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

export async function registerUseCase() {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        }
    });

    if (userWithSameEmail) {
        return reply.status(409).send();
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash
        }
    });
}