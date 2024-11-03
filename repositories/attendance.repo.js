const Repository = require('./Repository');
const attendanceModel = require('../models/attendance_model');

class AttendanceRepo extends Repository
{
    constructor()
    {
        super(attendanceModel);
    }
}
module.exports = new AttendanceRepo();


