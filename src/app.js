const express = require('express');
const app = express();

const dataBase = require('./config/database');
const user = require('./config/user');

const validate = require('./config/validator');

app.use(express.json());

app.post('/addUser', async (req, res) => {
  // const user = new User({
  //   firstName: 'Bala Murali Krishna', // String is shorthand for {type: String}
  //   lastName: 'Yarramsetty',
  //   emailId: 'ybalamuralikrishna47@gmail.com',
  //   password: 'ybmk1234',
  //   age: '21',
  //   gender: 'M',
  // }); ---> hard coding way

  // -> dynamic way

  const { firstName, lastName, emailId, password, age, gender, skills } =
    req.body;
  // console.log('data fetched from api successfully');
  // email validation
  try {
    console.log('recieved users data');
    validate(firstName, lastName, emailId, password, age, gender, skills);
    console.log('user enterd correct details');
    const newUser = user({
      firstName,
      lastName,
      emailId,
      password,
      age,
      gender,
      skills,
    });
    try {
      await newUser.save();
      res.send('user added Successfully');
    } catch (err) {
      res.status(500).send('error savng to db');
    }
  } catch (err) {
    console.log('validation error ' + err.message);
    res.status(404).send(err.message);
  }
  // skills
});

app.get('/allUsers', async (req, res) => {
  const allData = await user.find();
  res.send(allData);
});

app.patch('/update', async (req, res) => {
  const idUser = req.body._id;
  // const fileds make it dynamic
  const upd = await User.findByIdAndUpdate(idUser, { firstName: 'ybmkrishna' });
  res.send(' updated successfully to YBMK');
});

app.delete('/delete', async (req, res) => {
  const idUser = req.body._id;
  const del = await User.findByIdAndDelete(idUser);
  res.send('user deleted successfully');
});

try {
  dataBase.dataBase();
  app.listen(1618, () => {
    console.log('server listening');
  });
} catch (err) {
  console.log(err);
}
