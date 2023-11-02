import { Role } from '@roles/entities/Role'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { Request, Response } from 'express'

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handler(request: Request, response: Response): Promise<Role> {
    const { id } = request.params
    const { name } = request.body
    const role = await this.updateRoleUseCase.execute({ id, name })

    return response.status(200).json(role)
  }
}
