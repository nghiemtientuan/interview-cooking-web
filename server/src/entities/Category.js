import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert, BeforeUpdate
} from 'typeorm';

// utils
import {nowDatetime} from '../utils/date';

@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {nullable: true})
    name: string;

    @Column('int', {nullable: true})
    parent_id: number;

    @CreateDateColumn({
        type: 'timestamp',
        nullable: true,
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        nullable: true,
    })
    updated_at: Date;

    @DeleteDateColumn({
        type: 'timestamp',
        nullable: true,
    })
    deleted_at: Date;

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
