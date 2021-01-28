var mongoose = require('mongoose');
var interior =  mongoose.Schema({
    task: {
        type: String
    },
    type: {
        type: Boolean
    }
})

module.exports = mongoose.model('int_details', interior);