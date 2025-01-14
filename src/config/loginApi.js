const express = require('express');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const user = require('./user');
const User = require('./user');
const router = express.Router();
var cookieParser = require('cookie-parser');

router.get('/login', async (req, res) => {
  try {
    const { emailEntered, passwordEntered } = req.body;
    // console.log(emailEntered, passwordEntered);
    try {
      const user = await User.findOne({
        emailId: 'yvs@gmail.com',
      });

      if (user.emailId !== emailEntered) {
        res.status(404).send('invalid Credentials');
      }
      const pass = await bcrypt.compare(passwordEntered, user.password);

      if (!pass) {
        console.log('incorrect pass');
        // throw new Error('Invalid Credentials');
        res.status(404).send('invalid Credentials');
      } else {
        const hash = 'createdA@12645378201JWTToken@@@';
        const token = await jwt.sign(
          { _id: user._id }, // Payload
          hash, // Secret key
          { expiresIn: '10h' }
        );
        // const token = await jwt.sign({ _id: user._id }, hash);
        console.log(token);
        res.cookie('token', token);
        res.send('Login Successful !!!');
      }
      // -----------------------------------------------------
      //   if (!emailId) {
      //     throw new Error('Invalid Credentials');
      //   }
      //   const pass = await bcrypt.compare(passwordEntered, password);
      //   if (!pass) {
      //     res.send('Login Successful !!!');
      //   } else {
      //     throw new Error('Invalid Credentials');
      //   }
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
