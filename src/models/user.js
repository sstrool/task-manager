const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
  })
//*
userSchema.methods.generateAuthToken = async function  ()  {
    const user = this
    const token = jwt.sign( {_id: user._id.toString()}, 'bluehorseshoelovebluestarairlines')

    user.tokens = user.tokens.concat({ token })
    //await user.save()

    return token
}


//*
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) { 
        throw new Error('Unable to login') 
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) { 
        throw new Error('Unable to login') 
    }
    
    return user
}

//Has the plain text password prior to save  
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User