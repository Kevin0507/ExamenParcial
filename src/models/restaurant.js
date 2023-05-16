const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);