import User from '../models/User'

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const { id, name, email, provider } = await User.create(req.body)
    return res.json({ id, name, email, provider })
  }

  async update(req, res) {
    const { email, oldPassword } = req.body

    const user = await User.findByPk(req.userId)

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe' })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha inválida' })
    }

    const { id, name, provider } = await user.update(req.body)

    return res.json({ id, name, email, provider })
  }
}

export default new UserController()
