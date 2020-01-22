const validateSchema = schema => {
  return (req, res, next) => {
    return schema
      .validate(req.body)
      .then(() => next())
      .catch(err => res.status(400).json({ error: err.message }))
  }
}

export { validateSchema }
export default validateSchema

export { default as userSchemas } from './user'
export { default as sessionSchemas } from './session'
