const mongoose = require('mongoose')
const validator = require('validator')


 User = mongoose.model('User', {
  name: {
      type: String,
      trim: true,
      required: true
  },
  email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(val) {
          if (!validator.isEmail(val)) {
              throw new Error('Invalid email format')
          }
      }
  },
  password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(v) {
          if (v.includes('password')) {
              throw new Error('Password invalid, cannot contain password.')
          }
      }
  },
  age: {
      type: Number,
      default: 0,
      validate(val) {
          if (val.length < 0) {
              throw new Error('Age must be a positive number.')
          }
      }
  }
})

module.exports = User