const mongoose = require('mongoose');

const registerScheema = mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    profile: {
        type: String
    }
})


module.exports = mongoose.model('register', registerScheema);