const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerId: String,
    order_details: [{
       productId: String,
       productName: String,
       quantity: Number,
       totalAmount: Number,
       orderedAt: {
            type: Date,
            default: new Date(),
        },
        delivery_status: {
            type: Boolean,
            default: false,
        }
    }],
});

module.exports = mongoose.model('OrderSchema', orderSchema);
