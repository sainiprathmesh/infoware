// function to view all product list
const AddProduct = require('../../../models/addProduct')

const getAllProducts = async (req,res) => {
    try {
        const product = await AddProduct.find();
        return {product};
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports  = {
    getAllProducts
}
