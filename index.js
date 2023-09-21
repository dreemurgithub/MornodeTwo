const express = require('express')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('one.db');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})