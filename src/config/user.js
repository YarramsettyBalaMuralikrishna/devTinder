const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requried: true,
      minLength: 3,
      maxLength: 40,
    }, // String is shorthand for {type: String}
    lastName: {
      type: String,
      requried: true,
      minLength: 3,
      maxLength: 20,
    },
    emailId: {
      type: String,
      requried: true,
      unique: true,
      immutable: true,
      lowercase: true,
    },
    password: String,
    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    age: Number,
    gender: String,
    skills: [],
    about: {
      type: String,
      default: 'hii this is me',
    },
    pic: {
      type: String,
      default:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg',
    },
  },
  {
    timestamps: true,
  }
);

// If you want to add additional keys later, use the Schema#add method.

module.exports = mongoose.model('User', userSchema);
