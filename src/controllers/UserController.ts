import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Henrico', email: 'henrico.lazuroz2@gmail.com' },
  { name: 'Diego', email: 'diego@rocketseat.com' }
]

export default {
  async index (req: Request, res: Response) {
    return res.json(users)
  },

  async create (req: Request, res: Response) {
    const emailService = new EmailService()
    emailService.sendMail({
      to: { name: 'José', email: 'jose@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema!', body: 'Seja bem-vindo!' }
    })

    return res.json({ sucess: true })
  }
}
