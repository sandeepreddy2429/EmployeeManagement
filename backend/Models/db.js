// Models/db.js

const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI; // Ensure MongoDB URI is retrieved from the environment

if (!dbURI) {
    console.error('MongoDB URI not found in environment variables');
    process.exit(1); // Exit if the MongoDB URI is not defined
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error while MongoDB connecting ...', err);
    });
