// config
import {dataConnection} from '../config/database';

// entities
import {Category} from '../entities/Category';

export const CategoryRepository = dataConnection.getRepository(Category).extend({
    getTreeCategories() {
        return this.find({
            relations: [
                'childCategories',
            ],
            withDeleted: false,
        });
    },
});
