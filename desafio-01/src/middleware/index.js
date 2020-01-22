module.exports.checkProjectExists = (req, res, next) => {
  const { id } = req.params
  const project = req.db.find((r) => r.id.toString() === id)

  if (!project) {
    return res.status(400).send({ error: 'Este projeto não existe.' })
  }

  return next()
}

module.exports.postProject = (req, res, next) => {
  let error = null
  if (!req.body.id) error = 'Id não informado.'
  if (!req.body.title) error = 'Title não informado.' 
  if (req.db.find(p => p && p.id.toString() === req.body.id.toString() )) error = 'Já existe um projeto com esse id.'

  if (error) {
    return res.status(400).send({ error })
  }

  return next()
}