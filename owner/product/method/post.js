const {addProduct} = require('../functions/addProduct')

module.exports = async(req, res) => {
    try{
        let data = await addProduct(req,res)
        res.status(200).send(data)
    }catch(error){
        console.error(error)
        res.status(500).send({message: error})
    }
}
