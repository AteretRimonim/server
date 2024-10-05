const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
},
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = mongoose.model('Employee', employeeSchema);;
