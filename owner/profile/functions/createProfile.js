// function to create a profile (this access only for owner)
const PostProfile = require('../../../models/postProfile')

const createProfile = async (req,res) => {
    const { name, contact_no, password, gender, selectedProfilePic, dateOfBirth} = req.body;

    const newPostProfile = new PostProfile({ name, contact_no, password, gender, selectedProfilePic, dateOfBirth})
    try {
        let profileId = newPostProfile._id
        await newPostProfile.save();
        return {profileId, name, message: "Success"};
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports  = {
    createProfile
}
