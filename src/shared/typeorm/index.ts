import { DataSource } from 'typeorm'
import { CreateRolesTable1698840084404 } from './migrations/1698840084404-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1698840084404],
})
