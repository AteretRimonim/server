const mongoose=require("mongoose");

const attendanceSchema=new mongoose.Schema({
   id:{
    type: Number,
    required: true,
    unique: true
   },
   employee_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', 
    required: true,
   },
   date:{
    type: Date,
    required: true,
   },
   check_in_time:{
    type: String,
    required: true,
    trim: true,
   },
   check_out_time:{
    type: String,
    required: true,
    trim: true,
   },
   status:{
    type: String,
    required: true,
    trim: true,
   }
});
module.exports = mongoose.model('Attendance', attendanceSchema);
