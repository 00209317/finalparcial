const herbario = require('../models/Herbario');
const herbarioController = {};

herbarioController.index = async function(req,res,next) {
    try{
        let herbarios = await herbario.find();
        return res.status(200).json(herbarios);
    }catch(error){
        return res.status(500).json({error:error})
    }
};

module.exports = herbarioController;