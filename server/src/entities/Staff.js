import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

// entities
import {Role} from './Role';

@Entity({name: 'staffs'})
export class Staff {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('text', {nullable: false})
  email: string = '';

  @Column('text', {nullable: true})
  username: string = '';

  @Column('text', {nullable: true})
  fullname: string = '';

  @Column('text', {nullable: true})
  password: string = '';

  @Column('text', {nullable: true})
  birthday: string = '';

  @Column('text', {nullable: true})
  image: string = '';

  @Column('int', {nullable: true})
  role_id: number = 0;

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

  @ManyToOne(() => Role, role => role.staffs)
  @JoinColumn({name: 'role_id', referencedColumnName: 'id'})
  role: Role = undefined;
}
