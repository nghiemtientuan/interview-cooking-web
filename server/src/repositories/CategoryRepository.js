import {IsNull} from 'typeorm';

// config
import {dataConnection} from '../config/database';

// entities
import {Category} from '../entities/Category';

export const CategoryRepository = dataConnection.getRepository(Category).extend({
    getTreeCategories() {
        return this.find({
            where: {
                deleted_at: IsNull(),
                parent_id: IsNull(),
            },
            relations: [
                'childCategories',
            ],
        });
    },
});
