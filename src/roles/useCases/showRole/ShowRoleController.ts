import { Request, Response } from 'express'
import { ShowRoleUseCase } from './ShowRoleUseCase'

export class ShowRoleController {
  constructor(private showRoleUseCase: ShowRoleUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const role = await this.showRoleUseCase.execute({ id })

    return response.status(200).json(role)
  }
}
