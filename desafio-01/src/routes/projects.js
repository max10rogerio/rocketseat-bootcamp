const router = require('express').Router()
const { checkProjectExists, postProject } = require('../middleware')

router.get('/projects', (req, res) => {
  return res.json({ data: req.db })
})

router.post('/projects', postProject, (req, res) => {
  const { id, title } = req.body
  const project = { id, title, tasks: [] }
  
  req.db.push(project)

  return res.json({ data: { project } })
})

router.put('/projects/:id', checkProjectExists, (req, res) => {
  console.log(req.params, req.body)
  const { id } = req.params
  const { title } = req.body

  const project = req.db.find(p => p.id.toString() === id)

  project.title = title

  return res.json({ data: project })
})

router.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params
  const item = req.db.findIndex(p => p.id.toString() === id.toString())

  req.db = req.db.splice(item, 1)

  return res.json({ data: 'Item removido.' })
})

router.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = req.db.find(p => p.id === parseInt(id))

  project.tasks.push(title)

  res.json({ data: project })

})

module.exports = router