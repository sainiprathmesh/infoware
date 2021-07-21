const PlaceOrder = require('../../../models/order')
const ProductDetail = require('../../../models/addProduct')
const CustomerProfile = require('../../../models/postCustomerProfile')

const placeOrder = async (req,res) => {
    const { customerId, order_details } = req.body;

    // checking whether customer exist or not if customer exist then add some more order_details
    const customer = await CustomerProfile.findById(customerId)
    if (!customer) {
        return res.status(404).json({message: "Customer details not found"});
    } else {
        // if customer exist then pick the name of product and price to calculate total amount to be paid
        for (const item of order_details) {
            const product = await ProductDetail.findById(item.productId)
            // check whether product exist or not for that productId
            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }
            item.productName = product.name;
            item.totalAmount = product.price*item.quantity;
        }
    }

    const newPlaceOrder = new PlaceOrder({ customerId, order_details})
    try {
        let orderId = newPlaceOrder._id
        await newPlaceOrder.save();
        return {orderId, customerId, order_details, message: "Success"};
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports  = {
    placeOrder
}
