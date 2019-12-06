const express = require('express');
const db = require('./queries')
const app = express();
app.use(express.static('public'));
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers)
app.listen(3000, () => console.log('Server running on port 3000'))
