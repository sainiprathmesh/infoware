const {getAllProducts} = require('../functions/getAllProducts')

module.exports = async(req, res) => {
    try{
        let data = await getAllProducts(req, res)
        res.send(data)
    }catch(error){
        console.error(error)
        res.status(500).send({message: error})
    }
}
