const {Schema, model} = require('mongoose');

const adminsSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    role: {
        type: String,
    },
    user_id: {
      type: Schema.Types.Number,
      ref: 'Users'
    },
    created_at: Date,
    updated_at: Date
})

const adminsModel = model("Admins", adminsSchema);

module.exports = adminsModel