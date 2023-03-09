import {Category} from '../entities/Category';
import {dataConnection} from '../config/database';
import {SubCategory} from '../entities/SubCategory';

const categories = [
  {
    name: 'Món chính',
    sub: [
      'Cơm',
      'Gà',
      'Bò',
      'Cá',
      'Món chay',
    ],
  },
  {
    name: 'Món Phụ',
    sub: [
      'Ăn vặt',
      'Ăn sáng',
      'Khai vị',
    ],
  },
  {
    name: 'Nhanh - dễ',
    sub: [
      'Bún',
      'Phở',
    ],
  },
  {
    name: 'Lẩu',
    sub: [
      'Lẩu gà',
      'Lẩu vịt',
      'Lẩu đuôi bò',
    ],
  },
]

export const categorySeeder = async () => {
  const categoryRepository = dataConnection.getRepository(Category);
  const subCategoryRepository = dataConnection.getRepository(SubCategory);

  for (let item of categories) {
    const category = new Category();
    category.name = item.name;
    const categoryDB = await categoryRepository.save(category);

    for (let sub of item.sub) {
      const subCategory = new SubCategory();
      subCategory.name = sub;
      subCategory.category_id = categoryDB.id;
      await subCategoryRepository.save(subCategory);
    }
  }
};
