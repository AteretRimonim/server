const Service = require('./Service');
const reviewRepo = require('../repositories/review.repo');

class ReviewService extends Service
{
    constructor()
    {
        super(reviewRepo);
    }
}
module.exports = new ReviewService();