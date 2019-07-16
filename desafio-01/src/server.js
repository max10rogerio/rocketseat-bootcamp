const express = require('express')

const indexRoutes = require('./routes')
const projectRoutes = require('./routes/projects')

const PORT = 3000
const server = express()

let inMemoryDb = []
let countRequests = 0

server.use(express.json())
server.use((req, res, next) => {
  req.db = inMemoryDb
  req.countRequests = countRequests++

  console.log('Server request count: ', countRequests)
  next()
})

server.use(indexRoutes, projectRoutes)

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})