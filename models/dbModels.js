const mongoose = require('mongoose');

const DBSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{ 
        type: String, 
        required: true, 
        unique: true 
    },
    password:{ 
        type: String, 
        required: true }
});
const SncUser = mongoose.model('SncUser', DBSchema);
module.exports = SncUser;