import { FastifyInstance } from "fastify";
import z from "zod"
import { prisma } from "../lib/prisma";

export async function teamsRoutes(app: FastifyInstance) {
  // app.get('/teams', async () => {
  //   const teams = await prisma.team.findMany();
  //   return teams
  // })

  // app.post('/teams', async () => {
  //   const teams = await prisma.team.findMany();
  //   return teams
  // })

  // app.get('/teams/:ïd', async () => {
  //   return 'team'
  // })

  // app.post('/teams/:id', () => {
  //   return 'team'
  // })
}


// teams: z.array(z.object({
      //   name: z.string(),
      //   id: z.string(),
      //   trainerId: z.string(),
      //   pokemon: z.array(z.object({
      //     ability: z.string(),
      //     item: z.string(),
      //     level: z.number().min(50).max(100),
      //     moves:  z.array(z.object({
      //       type: z.string(),
      //       name: z.string(),
      //     })),
      //     species: z.string(),
      //     sprite: z.string(),
      //     teraType: z.string(),
      //     types: z.array(z.string()).min(1).max(2)
      //   }))
      // })),