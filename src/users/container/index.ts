import { IUsersRespository } from '@users/repositories/IUsersRepository'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton('CreateUserController', CreateUserController)
