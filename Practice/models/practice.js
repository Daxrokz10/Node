const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Practice",practiceSchema);