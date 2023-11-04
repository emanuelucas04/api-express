import { Role } from '@roles/entities/Role'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class UpdateRoleController {
  async handler(request: Request, response: Response): Promise<Role> {
    const updateRoleUseCase = container.resolve(UpdateRoleUseCase)
    const { id } = request.params
    const { name } = request.body
    const role = await updateRoleUseCase.execute({ id, name })

    return response.status(200).json(role)
  }
}
