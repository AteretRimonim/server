const Controller = require('./Controller');
const employeeService = require('../services/employee.service');

class EmployeeController extends Controller
{
    constructor()
    {
        super(employeeService);
    }
}
module.exports = new EmployeeController();
