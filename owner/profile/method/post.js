const {createProfile} = require('../functions/createProfile')

module.exports = async(req, res) => {
    try{
        let data = await createProfile(req,res)
        res.status(200).send(data)
    }catch(error){
        console.error(error)
        res.status(500).send({message: error})
    }
}
