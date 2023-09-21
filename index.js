const express = require('express')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('one.db');
db.exec('CREATE TABLE users (  id INTEGER PRIMARY KEY AUTOINCREMENT,    name TEXT,    email TEXT );')
// everytime we rebuild the docker we will lose the sqlite3 data
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})