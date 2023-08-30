const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    ProductCode: {
        type: String,
        required:[true,'In this case, entry is required'],
        minLength: 1,
        maxLength: 20,
        unique: [true, 'ProductCode cannot be duplicated']
    },
    ProductName: {
        type:String,
        required:[true,'In this case, entry is required'],
        minLength: 1,
        maxLength: 200
    }, 
    ProductDate: {
        type:Date,
        required:[true,'In this case, entry is required'],
    },
    ProductOriginPrice: {
        type: Number,
        required:[true,'In this case, entry is required'],
    },
    Quantity: {
        type: Number,
        required:[true,'In this case, entry is required'],
    },
    ProductStoreCode: {
        type: String,
        required:[true,'In this case, entry is required'],
    }
});
module.exports = mongoose.model("Product", product_schema);