const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
},
  event_name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  bonus_amount: {
    type: Number,
    required: true,
  }
});

module.exports =  mongoose.model('Event', eventSchema);;
