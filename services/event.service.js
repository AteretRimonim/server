const Service = require('./Service');
const eventRepo = require('../repositories/event.repo');

class EventService extends Service
{
    constructor()
    {
        super(eventRepo)
    }
}
module.exports = new EventService();
