const Controller = require('./Controller');
const eventService = require('../services/event.service');

class EventController extends Controller
{
    constructor()
    {
        super(eventService);
    }
}
module.exports = new EventController();