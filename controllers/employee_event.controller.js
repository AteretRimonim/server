const Controller = require('./Controller');
const employee_eventService = require('../services/employee_event.service');

class EmployeeEventController extends Controller
{
    constructor()
    {
        super(employee_eventService);
    }
}
module.exports = new EmployeeEventController();
