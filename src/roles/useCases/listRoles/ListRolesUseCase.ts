import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RolesPaginateProperties } from '@roles/repositories/RolesRepository'
import { injectable, inject } from 'tsyringe'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}
@injectable()
export class ListRolesUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({ page, skip, take })
  }
}
