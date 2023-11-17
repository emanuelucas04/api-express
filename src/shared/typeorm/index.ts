import { DataSource } from 'typeorm'
import { Role } from '@roles/entities/Role'
import { User } from '@users/entities/User'
import { CreateRolesTable1698840084404 } from './migrations/1698840084404-CreateRolesTable'
import { CreateUsersTable1699125619175 } from './migrations/1699125619175-CreateUsersTable'
import { AddRoleIdToUsersTable1699359690651 } from './migrations/1699359690651-AddRoleIdToUsersTable'
import { CreateRefreshTokensTable1700227010543 } from './migrations/1700227010543-CreateRefreshTokensTable'
import { RefreshToken } from '@users/entities/RefreshToken'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1698840084404,
    CreateUsersTable1699125619175,
    AddRoleIdToUsersTable1699359690651,
    CreateRefreshTokensTable1700227010543,
  ],
})
