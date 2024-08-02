const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, required: true },
    eventType: { type: String, required: true },
    dietaryPreferences: { type: String, required: true },
    comments: { type: String }
});

module.exports = mongoose.model('Event', EventSchema);
