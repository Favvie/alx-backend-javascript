const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students');
  res.send();
});

app.listen(port, () => {
  console.log('liostnejiing');
});

module.exports = app;
