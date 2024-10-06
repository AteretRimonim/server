const Repository = require('./Repository');
const eventModel = require('../models/event.model');

class EventRepo extends Repository
{
    constructor()
    {
        super(eventModel);
    }
}

module.exports = new EventRepo();
