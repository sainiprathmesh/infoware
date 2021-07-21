// function for creating the customer profile
const PostCustomerProfile = require('../../../models/postCustomerProfile')

const createCustomerProfile = async (req,res) => {
    const { name, email, contact_no, password, gender, dateOfBirth} = req.body;

    const newPostProfile = new PostCustomerProfile({ name, email, contact_no, password, gender, dateOfBirth})
    try {
        let customerId = newPostProfile._id
        await newPostProfile.save();
        return {customerId, name, message: "Success"};
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports  = {
    createCustomerProfile
}
