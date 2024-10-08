const Service = require('./Service');
const employee_eventRepo = require('../repositories/employee_event.repo');

class EmployeeEventService extends Service
{
    constructor()
    {
        super(employee_eventRepo);
    }
}
module.exports= new EmployeeEventService();