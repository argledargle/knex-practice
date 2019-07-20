const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: 'postgresql://dunder-mifflin@localhost/knex-practice',
})