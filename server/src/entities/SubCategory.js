import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';
import {Category} from './Category';

@Entity({name: 'sub_categories'})
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number = undefined;

    @Column('text', {nullable: true})
    name: string = '';

    @Column('int', {nullable: true})
    category_id: number = 0;

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

    @ManyToOne(() => Category, category => category.childCategories)
    @JoinColumn({name: 'category_id', referencedColumnName: 'id'})
    parentCategory: Category = undefined;
}
