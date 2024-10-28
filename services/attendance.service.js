const Service = require('./Service');
const attendanceRepo = require('../repositories/attendance.repo');

class AttendanceService extends Service
{
    constructor()
    {
        super(attendanceRepo);
    }
}
module.exports= new AttendanceService();