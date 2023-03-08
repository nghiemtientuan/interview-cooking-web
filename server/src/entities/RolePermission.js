import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

@Entity({name: 'role_permissions'})
export class RolePermission {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('int', {nullable: true})
  role_id: number = 0;

  @Column('int', {nullable: true})
  permission_id: number = 0;

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
}
