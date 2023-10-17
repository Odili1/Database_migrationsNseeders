const {Schema, model} = require('mongoose');

const categoriesSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        types: String,
    },
    active: {
        types: Boolean,
        // default: true
    },
    created_at: Date,
    updated_at: Date
});

const categoriesModel = model("Categories", categoriesSchema);

module.exports = categoriesModel