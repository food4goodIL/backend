const pool = require('./pg_connector').pg_pool_aws;
const getUsers = (request, response) => {
  pool.query('SELECT * FROM core.users ', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
  getUsers,
}
