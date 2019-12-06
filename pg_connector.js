var pg = require("pg")
const pg_pool_aws = new pg.Pool({
user: "food4good",
host: "database-1.crig0os1gnrc.eu-central-1.rds.amazonaws.com",
database: "dev",
password: "12345678",
port: "5432"});
const pg_pool_local = new pg.Pool({
	user: "superup",
	host: "127.0.0.1",
	database: "superup",
	password: "12345678",
	port: "5432"});


module.exports = {
  pg_pool_aws,
  pg_pool_local,
}
// var connectionString = "pg://postgres:food4good@database-1.crig0os1gnrc.eu-central-1.rds.amazonaws.com:5432/students";
// var client = new pg.Client(connectionString);
// client.connect();
