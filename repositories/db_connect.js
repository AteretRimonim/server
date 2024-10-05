const mongoose = require('mongoose');
const autoBind = require('auto-bind');

const connectionString = process.env.CONNECTION_STRING;

async function connect(){
    autoBind(this);
    try{
        await mongoose.connect(connectionString , {
          
            dbName: 'employeeManagementDB'
          });
    }
 catch (error) {
    console.log("oops error....😥 -" + error);
    throw new Error("Error connecting to DB, please try again later...")
}
}
module.exports = { connect };