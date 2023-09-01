const mongoose = require('mongoose');

const date = new Date();
date.setFullYear(date.getFullYear() + 1);

//~ creating a flight schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: date,
       

    }
});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;