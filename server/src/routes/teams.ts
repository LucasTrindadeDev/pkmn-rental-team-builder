import { FastifyInstance } from "fastify"
import z from "zod"
import { prisma } from "../lib/prisma"

export async function teamsRoutes(app: FastifyInstance) {
  app.get('/teams', async () => {
    const teams = await prisma.team.findMany()
    return teams
  })

  app.get('/teams/:teamId', async (request) => {
    const paramsSchema = z.object({
      teamId: z.string()
    })

    const { teamId } = paramsSchema.parse(request.params)

    const team = await prisma.team.findUniqueOrThrow({
      where: {
        teamId,
      },
    })

    return team
  })

  app.post('/teams', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      teamId: z.string(),
      trainerId: z.string(),
      pokemon: z.array(z.object({
        ability: z.string(),
        item: z.string(),
        level: z.number().min(50).max(100),
        moves:  z.array(z.object({
          type: z.string(),
          name: z.string(),
        })),
        species: z.string(),
        sprite: z.string(),
        teraType: z.string(),
        types: z.array(z.string()).min(1).max(2)
      }))
    })

    const { name, teamId, trainerId, pokemon } = bodySchema.parse(request.body)

    const team = await prisma.team.create({
      data: {
        name,
        teamId,
        trainerId,
        pokemon
      }
    })

    return team
  })

  app.put('/teams/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string()
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      name: z.string(),
      teamId: z.string(),
      trainerId: z.string(),
      pokemon: z.array(z.object({
        ability: z.string(),
        item: z.string(),
        level: z.number().min(50).max(100),
        moves:  z.array(z.object({
          type: z.string(),
          name: z.string(),
        })),
        species: z.string(),
        sprite: z.string(),
        teraType: z.string(),
        types: z.array(z.string()).min(1).max(2)
      }))
    })

    const { name, teamId, trainerId, pokemon } = bodySchema.parse(request.body)

    const team = await prisma.team.update({
      where: {
        id,
      },
      data: {
        name,
        teamId,
        trainerId,
        pokemon
      }
    })

    return team
  })

  app.delete('/teams/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string()
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.team.delete({
      where: {
        id,
      }
    })
  })
}