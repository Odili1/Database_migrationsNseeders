const {Schema, model} = require('mongoose');


const productsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        unique: true
    },
    price: {
        type: String,
    },
    size: {
      type: String,
      enum: ["small", "medium", "large"]
    },
    categories_id: {
        type: Schema.Types.Number,
        ref: "Categories"
    },
    created_at: Date,
    updated_at: Date
})

const productsModel = model('Products', productsSchema);

module.exports = productsModel