import { Router } from 'express'
import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRoleController } from '@roles/useCases/showRole'
import { updateRoleController } from '@roles/useCases/updateRole'
import { deleteRoleController } from '@roles/useCases/deleteRole'

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

rolesRouter.put('/:id', (request, response) => {
  return updateRoleController.handler(request, response)
})

rolesRouter.delete('/:id', (request, response) => {
  return deleteRoleController.handler(request, response)
})

export { rolesRouter }
