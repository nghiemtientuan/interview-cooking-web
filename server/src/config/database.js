import { DataSource } from 'typeorm';
require('dotenv').config();

export const dataConnection = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        __dirname + "/../entities/**/*.js",
    ],
    migrations: [
        __dirname + '/../migrations/**/*.js'
    ],
    logging: false,
    synchronize: true,
    keepConnectionAlive: true
});
