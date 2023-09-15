import { FastifyInstance } from "fastify"
import z from "zod"
import { prisma } from "../lib/prisma"

export async function trainersRoutes(app: FastifyInstance) {
  app.get('/trainers', async () => {
    const trainers = await prisma.trainer.findMany()
    return trainers
  })
  
  app.post('/trainers', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      game: z.string(),
    })

    const { name, game } = bodySchema.parse(request.body)

    const trainer = await prisma.trainer.create({
      data: {
        name,
        game,
      }
    })

    return trainer
  })

  app.get('/trainers/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const trainer = await prisma.trainer.findUniqueOrThrow({
      where: {
        id,
      }
    })

    return trainer
  })

  app.get('/trainers/:id/teams', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const teams = await prisma.team.findMany({
      where: {
        trainerId: id,
      }
    })

    return teams
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

    const trainer = await prisma.trainer.update({
      where: {
        id,
      },
      data: {
        name,
        game,
      }
    })

    return trainer
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