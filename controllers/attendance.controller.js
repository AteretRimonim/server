const Controller = require('./Controller');
const attendanceService = require('../services/attendance.service');

class AttendanceController extends Controller
{
    constructor()
    {
        super(attendanceService);
    }
}
module.exports = new AttendanceController();