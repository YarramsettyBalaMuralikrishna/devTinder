const express = require('express');
const app = express();

const dataBase = require('./config/database');
const User = require('./config/user');

app.post('/signup', async (req, res) => {
  const user = new User({
    firstName: 'Bala Murali Krishna', // String is shorthand for {type: String}
    lastName: 'Yarramsetty',
    emailId: 'ybalamuralikrishna47@gmail.com',
    password: 'ybmk1234',
    age: '21',
    gender: 'M',
  });
  try {
    await user.save();
    res.send('user added successfully');
  } catch (err) {
    res.status(404).send(err);
  }
});

try {
  dataBase.dataBase();
  app.listen(1618, () => {
    console.log('server listening');
  });
} catch (err) {
  console.log(err);
}
