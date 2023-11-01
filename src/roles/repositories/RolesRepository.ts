import { Role } from '@roles/entities/Role'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

export type CreateRoleDTO = {
  name: string
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type RolesPaginateProperties = {
  perPage: number
  total: number
  currentPage: number
  data: Role[]
}

export class RolesRepository {
  private repository: Repository<Role>
  private static INSTANCE: RolesRepository

  private constructor() {
    this.repository = dataSource.getRepository(Role)
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }

    return RolesRepository.INSTANCE
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = this.repository.create({ name })
    return this.repository.save(role)
  }

  async save(role: Role): Promise<Role> {
    return this.repository.save(role)
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()

    const result = {
      perPage: take,
      total: count,
      currentPage: page,
      data: roles,
    }

    return result
  }

  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name })
  }

  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id })
  }
}
