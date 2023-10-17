const {Schema, model} = require('mongoose');
const {Types} = Schema

const userModel = new Schema({
    _id: Types.ObjectId,
    fullname: {
        types: String
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    phone_number: {types: String},
    password: {types: String},
    gender: {
        types: String,
        enum: ["male", "female"]
    },
    country: {types: String},
    created_at: Date,
    updated_at: Date
})