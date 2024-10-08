const Controller = require('./Controller');
const userService = require('../services/user.service');

class UserController extends Controller
{
    constructor()
    {
        super(userService);

    }
}

module.exports = new UserController();
