const Repository = require('./Repository');
const userModel = require('../models/user.model');

class UserRepo extends Repository
{
    constructor()
    {
        super(userModel);
    }
}
module.exports = new UserRepo();


