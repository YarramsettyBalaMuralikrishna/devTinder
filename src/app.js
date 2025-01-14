const express = require('express');
const app = express();

const dataBase = require('./config/database');
const user = require('./config/user');
const loginAuth = require('./config/loginApi');
const validate = require('./config/validator');
const profileRouter = require('./config/profile');
const authFunc = require('./config/user');
const bcrypt = require('bcrypt');

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
//.....adding user
app.post('/addUser', async (req, res) => {
  const { firstName, lastName, emailId, password, age, gender, skills } =
    req.body;
  try {
    // console.log('recieved users data');
    validate(firstName, lastName, emailId, password, age, gender, skills);
    // console.log('user enterd correct details');
    const passHash = String(await bcrypt.hash(password, 10));
    // console.log(passHash);

    const newUser = user({
      firstName,
      lastName,
      emailId,
      password: passHash,
      age,
      gender,
      skills,
    });
    try {
      await newUser.save();
      res.send('user added Successfully');
    } catch (err) {
      res.status(500).send('error savng to db' + err.message);
    }
  } catch (err) {
    console.log('validation error ' + err.message);
    res.status(404).send(err.message);
  }
  // skills
});

// kind of like insta feed
app.get('/allUsers', authFunc, async (req, res) => {
  const allData = await user.find();
  res.send(allData);
});

// update here and see that user can update profile only after loging into website
app.patch('/update', authFunc, async (req, res) => {
  const idUser = req.userData._id;
  // const fileds make it dynamic
  const upd = await user.findByIdAndUpdate(idUser, { firstName: 'ybmkrishna' });
  res.send(' updated successfully to YBMK');
});

/// user and admin rights
app.delete('/delete', authFunc, async (req, res) => {
  const idUser = req.userData._id;
  const del = await user.findByIdAndDelete(idUser);
  res.send('user deleted successfully');
});

app.get('/login', loginAuth);
app.get('/profile', profileRouter);

try {
  dataBase.dataBase();
  app.listen(1618, () => {
    console.log('server listening');
  });
} catch (err) {
  console.log(err);
}
