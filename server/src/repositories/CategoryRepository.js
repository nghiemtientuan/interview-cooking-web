// config
import {dataConnection} from '../config/database';

// entities
import {Category} from '../entities/Category';

export const CategoryRepository = dataConnection.getRepository(Category).extend({
    getCategories() {
        return this.find({
            where: {
                deleted_at: null,
            },
        });
    },
});
