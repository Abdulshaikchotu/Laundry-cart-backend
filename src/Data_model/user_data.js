const mongoose = require('mongoose');
const user_details = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique: true  },
    phone: { type: String, required: true,unique: true  },
    state: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    password: { type: String, required: true },
    orders:{type:Array, require:false}

})

const Data = mongoose.model('UserData', user_details);
module.exports = Data;