import * as Yup from 'yup'

export const store = async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6),
  })

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(err => res.status(400).json({ error: err.errors[0] }))
}
