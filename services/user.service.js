const Service = require('./Service');
const userRepo = require('../repositories/user.repo');

class UserService extends Service
{
    constructor()
    {
        super(userRepo);
    }
}
module.exports = new UserService();