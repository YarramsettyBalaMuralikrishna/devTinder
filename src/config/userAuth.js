const express = require('express');
const User = require('./user');
const jwt = require('jsonwebtoken');
const userAuthFunc = async (req, res, next) => {
  const cook = req.cookies;
  const { token } = cook;
  // console.log(token);
  const hash = 'createdA@12645378201JWTToken@@@';
  try {
    console.log('coming here');

    const decod = await jwt.verify(token, hash);
    console.log('hello world');
    try {
      console.log('coming here 2');
      const user = await User.findById(decod._id);
      //   console.log(user);
      if (!user) {
        res.status(400).send('Invalid User');
      } else {
        // res.status(200).send(user);
        console.log(user);

        req.userData = user;
        next();
      }
    } catch (err) {
      console.log('bye 1');

      res.status(404).send('please login again');
    }
  } catch (err) {
    console.log('bye 2');
    res.status(404).send('please login again');
  }
};

module.exports = userAuthFunc;
