const mongoose = require('mongoose');

const employeeEventSchema = new mongoose.Schema({
id: {
    type: String,
    required: true,
    unique: true,
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
   bonus_given: {
    type: Number,
    required: true,
},

   remarks: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300, 
}

});

module.exports = mongoose.model('EmployeeEvent', employeeEventSchemaSchema);;
