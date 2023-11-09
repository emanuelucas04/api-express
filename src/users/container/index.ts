import { IUsersRespository } from '@users/repositories/IUsersRepository'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository,
)
