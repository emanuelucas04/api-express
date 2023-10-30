import { Router } from 'express'
import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handler(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handler(request, response)
})

export { rolesRouter }
