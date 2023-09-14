import { FastifyInstance } from "fastify";
import z from "zod"
import { prisma } from "../lib/prisma";

export async function trainersRoutes(app: FastifyInstance) {
  app.get('/trainers', async () => {
    const trainers = await prisma.trainer.findMany();
    return trainers
  })
  
  app.post('/trainers', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      game: z.string(),
    })

    const { name, game } = bodySchema.parse(request.body)

    const user = await prisma.trainer.create({
      data: {
        name,
        game,
      }
    })

    return user
  })

  app.put('/trainers/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      name: z.string(),
      game: z.string(),
    })

    const { name, game } = bodySchema.parse(request.body)

    const user = await prisma.trainer.update({
      where: {
        id,
      },
      data: {
        name,
        game,
      }
    })

    return user
  })

  app.delete('/trainers/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.trainer.delete({
      where: {
        id,
      }
    })
  })
}