const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs')
const {Types} = Schema

const userSchema = new Schema({
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
});

// Before save
userSchema.pre('save', async function(next){
    const user = this

    console.log('pre save ', this);
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash

    next()
})

userSchema.methods.isValidPassword = async function(password){
    const user = this

    const compare = await bcrypt.compare(password, user.password)

    return compare
}


const userModel = model('Users', userSchema);

module.exports = userModel;