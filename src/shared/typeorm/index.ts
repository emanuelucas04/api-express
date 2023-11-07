import { DataSource } from 'typeorm'
import { CreateRolesTable1698840084404 } from './migrations/1698840084404-CreateRolesTable'
import { CreateUsersTable1699125619175 } from './migrations/1699125619175-CreateUsersTable'
import { AddRoleIdToUsersTable1699359690651 } from './migrations/1699359690651-AddRoleIdToUsersTable'
import { Role } from '@roles/entities/Role'
import { User } from '@users/entities/User'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1698840084404,
    CreateUsersTable1699125619175,
    AddRoleIdToUsersTable1699359690651,
  ],
})
