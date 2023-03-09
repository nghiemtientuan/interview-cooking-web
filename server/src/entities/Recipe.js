import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert, BeforeUpdate, OneToMany, ManyToOne, JoinColumn,
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

// entities
import {SubCategory} from './SubCategory';
import {RecipeIngredient} from './RecipeIngredient';
import {RecipeStep} from './RecipeStep';
import {RecipeTag} from './RecipeTag';
import {RecipeComment} from './RecipeComment';

@Entity({name: 'recipes'})
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column('text', {nullable: true})
  title: string = '';

  @Column('text', {nullable: true})
  description: string = '';

  @Column('int', {default: 0})
  prepare_time: number = 0;

  @Column('int', {default: 0})
  total_time: number = 0;

  @Column('int', {default: 0})
  number_persons: number = 0;

  @Column('text', {nullable: true})
  image: string = '';

  @Column('int', {nullable: true})
  sub_category_id: number = 0;

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

  @OneToMany(() => RecipeIngredient, recipeIngredient => recipeIngredient.recipe)
  recipeIngredients: RecipeIngredient[] = undefined;

  @OneToMany(() => RecipeStep, recipeStep => recipeStep.recipe)
  recipeSteps: RecipeStep[] = undefined;

  @OneToMany(() => RecipeTag, recipeTag => recipeTag.recipe)
  recipeTags: RecipeTag[] = undefined;

  @OneToMany(() => RecipeComment, recipeComment => recipeComment.recipe)
  recipeComments: RecipeComment[] = undefined;

  @ManyToOne(() => SubCategory, subCategory => subCategory.recipes)
  @JoinColumn({name: 'sub_category_id', referencedColumnName: 'id'})
  subCategory: SubCategory = undefined;
}
