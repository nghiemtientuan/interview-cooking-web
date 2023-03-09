import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate, OneToMany, ManyToMany,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

// entities
import {Staff} from './Staff';
import {Permission} from './Permission';

@Entity({name: 'roles'})
export class Role {
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

  @OneToMany(() => Staff, staff => staff.role)
  staffs: Staff[] = undefined;

  @ManyToMany(() => Permission, permission => permission.roles)
  permissions: Permission[] = undefined
}
