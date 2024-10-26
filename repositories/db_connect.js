const mongoose = require('mongoose');
const autoBind = require('auto-bind');

const connectionString = process.env.CONNECTION_STRING;
const dbName = process.env.DB_NAME;

/**
 * Connects to MongoDB using Mongoose.
 * 
 * @async
 * @function connect
 * @throws {Error} If the connection fails.
 */
async function connect(){
    autoBind(this);
    try{
        await mongoose.connect(connectionString , {
        
            dbName: dbName
          });
    }
 catch (error) {
    console.log("oops error....😥 -" + error);
    throw new Error("Error connecting to DB, please try again later...")
}
}
module.exports = { connect };