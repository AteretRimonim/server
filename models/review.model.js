const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
},
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  review_date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = mongoose.model('Review', reviewSchema);;
