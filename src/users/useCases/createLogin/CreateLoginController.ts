import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateLoginUseCase } from './CreateLoginUseCase'
import { instanceToInstance } from 'class-transformer'

export class CreateLoginController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createLoginUseCase = container.resolve(CreateLoginUseCase)
    const { email, password } = request.body
    const { user, accessToken, refreshToken } =
      await createLoginUseCase.execute({
        email,
        password,
      })
    return response
      .status(201)
      .json(instanceToInstance({ user, accessToken, refreshToken }))
  }
}
