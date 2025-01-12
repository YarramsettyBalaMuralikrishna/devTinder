// logic to connect to db
const mongoose = require('mongoose');

const connectDb = async (params) => {
  await mongoose.connect('mongodb://localhost:27017/devTinder');
};

connectDb()
  .then(() => {
    console.log('connection established successfully');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { dataBase: connectDb };
