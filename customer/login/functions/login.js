// function to login the user
const PostCustomerProfile = require('../../../models/postCustomerProfile')

const login = async (req,res) => {
    const { customerId, email, password} = req.body;
    const profile = await PostCustomerProfile.findById(customerId)

    try {
        // checking whether profile exist or not
        if (!profile) {
            return res.status(404).json({message: "User not found"});
        }
        // matching the credentials
        if (profile.email === email && profile.password === password){
            return {message: "Login Successful"};
        } else {
            return {message: "Wrong email and password"};
        }
    } catch (error) {
        return res.status(500).json({ message: "Login Failed" });
    }
}

module.exports  = {
    login
}
