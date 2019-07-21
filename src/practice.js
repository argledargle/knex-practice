const knex = require("knex");
require("dotenv").config();

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("Connection successful.");


function searchByProductName(searchTerm) {
knexInstance
.select('product_id', 'name', 'price', 'category')
.from('amazong_products')
.where('name', 'ILIKE', `%${searchTerm}%`)
.then(result => {
  console.log(result)
})
}

searchByProductName('holo')

function paginateProducts(page) {
    const productsPerPage = 10
    const offset = productsPerPage * ( page - 1)
    knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {console.log(result)})
}

paginateProducts(2)

function getProductsWithImages() {
  knexInstance.select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .whereNotNull('image')
  .then(result => {
    console.log(result)
  })
}

getProductsWithImages();