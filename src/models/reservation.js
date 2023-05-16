const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    restaurant_id:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    hour:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Reservation',reservationSchema);