const express = require('express');

const app = express();

app.post('/', (req, res) => {
  res.send('helo user');
});

app.post('/user', (req, res) => {
  res.send('user this is 1 user 1');
});

app.post('/user/pass', (req, res) => {
  res.send('user pass 1');
});
app.listen(1618, () => {
  console.log('server listening');
});
