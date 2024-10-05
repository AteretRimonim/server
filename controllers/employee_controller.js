const Controller = require('./Controller');
const employee_service = require('../services/employee_service');

class EmployeeController extends Controller
{
    constructor()
    {
        super(employee_service);
    }
}
module.exports = new EmployeeController();
