const herbario = require('../models/Herbario');
const herbarioController = {};

herbarioController.index = async function(req,res,next) {
        let herbarios = await herbario.find();
        return res.status(200).json(herbarios);
};


herbarioController.store = async function(req, res, next){
    let h = new herbario();
    h.nombre = req.body.nombre;
    h.familia = req.body.familia;
    h.anio = req.body.anio;
};




module.exports = herbarioController;