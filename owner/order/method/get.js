const {getAllOrders} = require('../functions/getOrders')

module.exports = async(req, res) => {
    try{
        let data = await getAllOrders(req, res)
        res.send(data)
    }catch(error){
        console.error(error)
        res.status(500).send({message: error})
    }
}
