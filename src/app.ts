import { fastify } from "fastify";
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

export const app = fastify();

app.post('/users', (request, reply) => {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { } = registerBodySchema.parse(request.body);
})

