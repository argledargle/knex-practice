const knex = require("knex");
require("dotenv").config();

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("Connection successful.");

function searchTerm(searchTerm) {
  knexInstance
    .select("*")
    .from("shopping_list")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then(result => {
      console.log("SEARCH TERM: ", { searchTerm });
      console.log(result);
    });
}

//searchTerm("urger");

function getPaginated(page) {
  const productsPerPage = 6;
  const offset = productsPerPage * (page - 1);
  knexInstance
    .select("*")
    .from("shopping_list")
    .limit(productsPerPage)
    .offset(offset)
    .then(results => {
      console.log(results);
    });
}

getPaginated(1);

function afterDate(daysAgo) {
  knexInstance
    .select("*")
    .from("shopping_list")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .from("shopping_list")
    .then(results => {
      console.log(results);
    });
}

//afterDate(2)

function total() {
  knexInstance
    .select("category")
    .sum("price as total")
    .from("shopping_list")
    .groupBy("category")
    .then(result => {
      console.log(result);
    });
}

//total();