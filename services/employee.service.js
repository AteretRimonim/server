const Service = require('./Service');
const employeeRepo = require('../repositories/employee.repo');

class EmployeeService extends Service
{
    constructor()
    {
        super(employeeRepo);
    }
}
module.exports= new EmployeeService();