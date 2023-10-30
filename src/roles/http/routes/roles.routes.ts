import { Router } from 'express'
import { createRolesController } from '@roles/useCases/createRole'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handler(request, response)
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json(roles)
})

export { rolesRouter }
