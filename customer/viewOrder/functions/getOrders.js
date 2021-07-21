// function to view order corresponding to each customer
const ViewOrder = require('../../../models/order')

const getOrder = async (req,res) => {
    const { customerId } = req.query;
    try {
        // query to view all order for that customerID
        const yourOrder = await ViewOrder.find({customerId: customerId});
        return {yourOrder};
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports  = {
    getOrder
}
