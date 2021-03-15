const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(`GET /`);
  res.send('Hello World 2!')
})

app.listen(80);
console.log(`Mock-api-2 started`);