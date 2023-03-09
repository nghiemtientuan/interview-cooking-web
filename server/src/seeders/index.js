import {dataConnection} from '../config/database';

import {categorySeeder} from './categorySeeder';
import {recipeSeeder} from './recipeSeeder';
import {videoSeeder} from './videoSeeder';

const init = async () => {
  await dataConnection.initialize();

  // seeders
  await categorySeeder();
  await recipeSeeder();
  await videoSeeder();
};

init().then(() => {
  console.log('Run seeder success!');

  process.exit();
}).catch((error) => {
  console.log('Run seeder failed!', error);

  process.exit()
});
