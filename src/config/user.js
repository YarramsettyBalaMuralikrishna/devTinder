const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  emailId: String,
  password: String,
  age: Number,
  gender: String,
});

// If you want to add additional keys later, use the Schema#add method.

module.exports = mongoose.model('User', userSchema);
