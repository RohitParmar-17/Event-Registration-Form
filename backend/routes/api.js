const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, dob, address, city, state, country, phoneNumber, gender, eventType, dietaryPreferences, comments } = req.body;

    try {
        const newEvent = new Event({ firstName, lastName, email, dob, address, city, state, country, phoneNumber, gender, eventType, dietaryPreferences, comments });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
