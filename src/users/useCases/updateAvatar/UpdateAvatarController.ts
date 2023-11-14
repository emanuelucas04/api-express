import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateAvatarUseCase } from './UpdateAvatarUseCase'

export class UpdateAvatarController {
  async handler(request: Request, response: Response): Promise<Response> {
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase)
    const user = await updateAvatarUseCase.execute({
      userId: request.user.id,
      avatarFilename: request.file.filename,
    })

    return response.json(instanceToInstance(user))
  }
}
