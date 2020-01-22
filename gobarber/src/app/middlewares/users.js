import User from '../models/User'

export const checkIsProvider = async (req, res, next) => {
  const isProvider = await User.findOne({
    where: { id: req.userId, provider: true },
  })

  if (!isProvider) {
    return res
      .status(401)
      .json({ error: 'Você precisa ser um prestador de serviços' })
  }

  return next()
}

export default {
  checkIsProvider,
}
