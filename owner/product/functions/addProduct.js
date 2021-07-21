// function to add product in list
const AddProduct = require('../../../models/addProduct')

const addProduct = async (req,res) => {
    const { name, description, category, price} = req.body;

    const newAddProduct = new AddProduct({name, description, category, price})
    try {
        let productId = newAddProduct._id
        await newAddProduct.save();
        return {productId, name, message: "Success"};
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports  = {
    addProduct
}
