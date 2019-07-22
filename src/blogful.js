require('dotenv').config();
const knex = require('knex');
const ArticleServices = require('./articles-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

console.log(ArticlesService.getAllArticles())