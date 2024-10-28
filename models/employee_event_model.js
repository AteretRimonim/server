const mongoose = require('mongoose');

const employeeEventSchema = new mongoose.Schema({
id: {
    type: Number,
    required: true,
    unique: true
},
employee_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', 
    required: true,
   },
event_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', 
    required: true,
   },
bonus_given:{
    type: String,
    required: true,
    trim: true,
   },
remarks:{
    type: String,
    required: true,
    trim: true,
   }
});

module.exports = mongoose.model('EmployeeEvent', employeeEventSchemaSchema);;
