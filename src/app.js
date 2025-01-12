const express = require('express');
const app = express();

const dataBase = require('./config/database');
const User = require('./config/user');
const user = require('./config/user');
app.use(express.json());

app.post('/signup', async (req, res) => {
  // const user = new User({
  //   firstName: 'Bala Murali Krishna', // String is shorthand for {type: String}
  //   lastName: 'Yarramsetty',
  //   emailId: 'ybalamuralikrishna47@gmail.com',
  //   password: 'ybmk1234',
  //   age: '21',
  //   gender: 'M',
  // });

  const { firstName, lastName, emailId, password, age, gender } = req.body;
  console.log('data fetched from api successfully');
  const newUser = User({ firstName, lastName, emailId, password, age, gender });
  try {
    await newUser.save();
    res.send('user added Successfully');
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/allUsers', async (req, res) => {
  const allData = await user.find();
  res.send(allData);
});

app.patch('/patch', async (req, res) => {
  const idUser = req.body._id;
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
