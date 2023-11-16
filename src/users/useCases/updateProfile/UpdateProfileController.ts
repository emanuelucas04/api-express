import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'
import { instanceToInstance } from 'class-transformer'

export class UpdateProfileController {
  async handler(request: Request, response: Response): Promise<Response> {
    const updateProfileUseCase = container.resolve(UpdateProfileUseCase)
    const { name, email, password, isAdmin, roleId } = request.body
    const user = await updateProfileUseCase.execute({
      name,
      email,
      password,
      isAdmin,
      roleId,
    })

    return response.status(201).json(instanceToInstance(user))
  }
}
