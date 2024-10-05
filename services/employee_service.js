const Service = require('./Service');
const repo = require('../repositories/employee_repo');

class EmployeeService extends Service
{
    constructor()
    {
        super(repo);
    }
}
module.exports= new EmployeeService();