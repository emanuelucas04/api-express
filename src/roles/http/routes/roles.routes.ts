import { Router } from 'express'
import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRoleController } from '@roles/useCases/showRole'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handler(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handler(request, response)
})

rolesRouter.get('/:id', (request, response) => {
  return showRoleController.handler(request, response)
})

export { rolesRouter }
