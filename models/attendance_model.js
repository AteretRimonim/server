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
    type: Date,
    required: true,
   },
   check_out_time:{
    type: Date,
    required: true,
   },
   status: {
      type: String,
      required: true,
      enum: ['present', 'absent', 'late'],
      trim: true,
  }
});
module.exports = mongoose.model('Attendance', attendanceSchema);
