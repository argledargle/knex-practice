const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("Connection successful.");

const q1 = knexInstance("amazong_products")
  .select("*")
  .toQuery();
const q2 = knexInstance
  .from("amazong_products")
  .select("*")
  .toQuery();

console.log("q1:", q1);

console.log("q2:", q2);

const q3 =knexInstance("amazong_products")
  .select('*')
  .then(result => {
    console.log(result);
  });

console.log("q3:", q3);