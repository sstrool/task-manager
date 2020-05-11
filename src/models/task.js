const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: { 
        type: String,
        required: true,
        trim: true
  },
    completed: { 
        type: Boolean,
        default: false
  },
    priority: {
      type: Number,
      default: 2
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }, {
    timestamps: true
  }
)


const Task = mongoose.model('Task', taskSchema )

module.exports = Task