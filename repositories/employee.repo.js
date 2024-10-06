const Repository = require('./Repository');
const employeeModel = require('../models/employee.model');

class EmployeeRepo extends Repository
{
    constructor()
    {
        super(employeeModel);
    }
}
module.exports = new EmployeeRepo();


