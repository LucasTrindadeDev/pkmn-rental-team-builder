import fastify from 'fastify'
import cors from '@fastify/cors'
import { trainersRoutes } from './routes/trainers'
import { teamsRoutes } from './routes/teams'

const app = fastify()

app.register(cors, {
  origin: true
})

app.register(trainersRoutes)
app.register(teamsRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})