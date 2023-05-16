const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    tables_available:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);