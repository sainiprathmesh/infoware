//function for seeing all order for owner
const GetOrders = require('../../../models/order')

const getAllOrders = async (req,res) => {
    try {
        const orderList = await GetOrders.find();
        return {orderList};
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports  = {
    getAllOrders
}
