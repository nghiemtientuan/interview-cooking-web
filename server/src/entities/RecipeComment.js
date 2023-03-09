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
import {Recipe} from './Recipe';
import {User} from './User';

@Entity({name: 'recipe_comments'})
export class RecipeComment {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('text', {nullable: true})
  content: string = '';

  @Column('int', {nullable: true})
  user_id: number = 0;

  @Column('int', {nullable: true})
  recipe_id: number = 0;

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

  @ManyToOne(() => Recipe, recipe => recipe.recipeIngredients)
  @JoinColumn({name: 'recipe_id', referencedColumnName: 'id'})
  recipe: Recipe = undefined;

  @ManyToOne(() => User, user => user.recipeComments)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user: User = undefined;
}
