import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate, OneToMany,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

// entities
import {RecipeComment} from './RecipeComment';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('text', {nullable: false})
  email: string = '';

  @Column('text', {nullable: true})
  username: string = '';

  @Column('text', {nullable: true})
  fullname: string = '';

  @Column('text', {nullable: true})
  birthday: string = '';

  @Column('text', {nullable: true})
  password: string = '';

  @Column('text', {nullable: true})
  stripe_customer_id: string = '';

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

  @OneToMany(() => RecipeComment, recipeComment => recipeComment.user)
  recipeComments: RecipeComment[] = undefined;
}
