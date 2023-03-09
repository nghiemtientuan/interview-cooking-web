import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate, ManyToMany, JoinTable,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

// entities
import {Role} from './Role';

@Entity({name: 'permissions'})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('text', {nullable: true})
  name: string = '';

  @Column('text', {nullable: true})
  slug: string = '';

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  created_at: Date = undefined;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updated_at: Date = undefined;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deleted_at: Date = undefined;

  @BeforeInsert()
  insertCreated() {
    this.created_at = new Date(nowDatetime());
    this.updated_at = new Date(nowDatetime());
  }

  @BeforeUpdate()
  insertUpdated() {
    this.updated_at = new Date(nowDatetime());
  }

  @ManyToMany(() => Role, role => role.permissions)
  @JoinTable({
    name: 'role_permissions',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  roles: Role[] = undefined
}
