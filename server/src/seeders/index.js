import {categorySeeder} from './categorySeeder';
import {dataConnection} from '../config/database';

const init = async () => {
  await dataConnection.initialize();

  // seeders
  await categorySeeder();
};

init().then(() => {
  console.log('Run seeder success!');

  process.exit();
}).catch((error) => {
  console.log('Run seeder failed!', error);

  process.exit()
});
