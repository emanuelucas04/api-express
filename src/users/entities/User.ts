import { v4 as uuidv4 } from 'uuid'
import { Column, CreateDateColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Role } from '@roles/entities/Role'

export class User {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar?: string

  @ManyToOne(() => Role, {
    cascade: true,
  })
  role: Role

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
