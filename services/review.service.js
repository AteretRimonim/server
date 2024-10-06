const Service = require('./Service');
const repo = require('../repositories/review.repo');

class ReviewService extends Service
{
    constructor()
    {
        super(repo);
    }
}
module.exports = new ReviewService();