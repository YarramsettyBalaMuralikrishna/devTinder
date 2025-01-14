const express = require('express');
const router = express.Router();
const User = require('./user');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const authFunc = require('./userAuth');

router.get('/profile', authFunc, async (req, res) => {
  res.status(200).send(req.userData);
  //   const cook = req.cookies;
  //   const { token } = cook;
  //   console.log(token);
  //   const hash = 'createdA@12645378201JWTToken@@@';
  //   try {
  //     const decod = await jwt.verify(token, hash);
  //     console.log(decod);

  //     try {
  //       const user = await User.findById(decod._id);
  //       console.log(user);

  //       if (!user) {
  //         res.status(400).send('Invalid User');
  //       } else {
  //         res.status(200).send(user);
  //       }
  //     } catch (err) {
  //       res.status(404).send('please login again');
  //     }
  //   } catch (err) {
  //     res.status(404).send('please login again');
  //   }
});

module.exports = router;
