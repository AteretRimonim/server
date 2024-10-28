const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      userName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8, 
    }
    
});

module.exports =  mongoose.model('User', userSchema);;
