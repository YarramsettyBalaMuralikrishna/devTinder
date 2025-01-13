const validator = require('validator');
const { Error } = require('mongoose');

function validate(firstName, lastName, emailId, password, age, gender, skills) {
  const nameRegex = /^[A-Za-z\s]+$/;
  // first Name
  if (typeof firstName !== 'string' || firstName.trim() === '') {
    throw new Error('Name is required and must be a valid string');
  }
  // Regular expression to allow only alphabets and spaces

  if (!nameRegex.test(firstName)) {
    throw new Error('Name can only contain alphabets and spaces');
  }
  if (firstName.length < 3 || firstName.length > 50)
    throw new Error('Name must be between 3 and 50 characters long');
  // /////////////////
  // -------------------------------last Name----------------------
  if (typeof lastName !== 'string' || lastName.trim() === '') {
    throw new Error('Name is required and must be a valid string');
  }

  if (!nameRegex.test(lastName)) {
    throw new Error('Name can only contain alphabets and spaces');
  }
  if (lastName.length < 3 || lastName.length > 50)
    throw new Error('Name must be between 3 and 50 characters long');

  if (!emailId || typeof emailId !== 'string') throw new Error('Invalid email');
  if (!validator.isEmail(emailId)) {
    // console.log('hello email' + emailId);

    throw new Error('invalid email');
  }
  // first name and last name validation

  if (!validator.isStrongPassword(password)) {
    throw new Error('weak password');
  }
  if (!validator.isNumeric(age)) {
    throw new Error('invalid age');
  }

  //   console.log(gender.toLowerCase());

  if (
    gender.toLowerCase() !== 'male' &&
    gender.toLowerCase() !== 'female' &&
    gender.toLowerCase() !== 'Other'
  ) {
    throw new Error('invalid category');
  }
  if (skills.length <= 0) {
    res.status(400).send('please add some skills');
  }
  if (skills.length > 20) {
    res.status(400).send('too many skills reduce some');
  }
}

module.exports = validate;
