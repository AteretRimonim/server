const Service = require('./Service');
const userRepo = require('../repositories/user.repo');

class UserService extends Service
{
    constructor()
    {
        super(userRepo);

    }
    async existsUser(password, email)
    {
       return await userRepo.existsUserToLogin(password, email);
    }
}
module.exports = new UserService();