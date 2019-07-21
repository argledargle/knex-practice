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

searchTerm("urger");
