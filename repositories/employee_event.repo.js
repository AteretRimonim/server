const Repository = require('./Repository');
const employee_eventModel = require('../models/employee_event_model');

class EmployeeEventRepo extends Repository
{
    constructor()
    {
        super(employee_eventModel);
    }
}
module.exports = new EmployeeEventRepo();
