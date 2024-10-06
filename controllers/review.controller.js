const Controller = require('./Controller');
const reviewService = require('../services/review.service');

class ReviewController extends Controller
{
    constructor()
    {
        super(reviewService);

    }
}

module.exports = new ReviewController();
