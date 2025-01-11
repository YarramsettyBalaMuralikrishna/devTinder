const express = require('express');

const app = express();

app.post('/', (req, res) => {
  res.send('helo user');
});

app.post('/user', (req, res) => {
  res.send('user this is  user 1');
});

app.post('/user/pass', (req, res) => {
  res.send('user pass 1');
});

app.delete('/user', (req, res) => {
  res.send('user deleted successfully');
  console.log('user deleted successfully');
});

app.get('/user/1', (req, res) => {
  res.send('user details fetched successfully');
  console.log('user details fetched successfully');
});
app.put('/user/1', (req, res) => {
  res.send('user details updated successfuly');
  console.log('user details updated successfuly');
});

app.patch('/user/1/name', (req, res) => {
  res.send('user details patched successfuly');
  console.log('user details patched successfuly');
});

app.listen(1618, () => {
  console.log('server listening');
});
