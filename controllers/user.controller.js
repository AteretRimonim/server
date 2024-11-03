const Controller = require('./Controller');
const userService = require('../services/user.service');

class UserController extends Controller
{
    constructor()
    {
        super(userService);

    }
    async login(req, res, next) {
        const { password } = req.body;
        const { email } = req.body;

        try {
            const response = await userService.existsUser(password, email);
            return res.status(response.statusCode).json(response);
            
        } catch (e) {
            next(e);
        }
    }
      
}

module.exports = new UserController();
