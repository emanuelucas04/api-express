import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ShowProfileUseCase } from './ShowProfileUseCase'
import { instanceToInstance } from 'class-transformer'

export class CreateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const showProfileUseCase = container.resolve(ShowProfileUseCase)
    const userId = request.user.id
    const user = await showProfileUseCase.execute({ userId })

    return response.json(instanceToInstance(user))
  }
}
