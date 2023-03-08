import {Category} from '../entities/Category';
import {dataConnection} from '../config/database';

const data = [
  {
    name: 'category',
  },
];

export const categorySeeder = async () => {
  const categoryRepository = dataConnection.getRepository(Category);
  for (let item of data) {
    const category = new Category();
    category.name = item.name;
    await categoryRepository.save(category);
  }
};
