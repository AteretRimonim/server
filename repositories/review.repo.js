const Repository = require('./Repository');
const reviewModel = require('../models/review.model');

class ReviewRepo extends Repository
{
    constructor()
    {
        super(reviewModel);
    } 
}
module.exports = new ReviewRepo();