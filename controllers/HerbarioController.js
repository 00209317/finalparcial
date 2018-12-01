const herbario = require('../models/Herbario');
const herbarioController = {};

herbarioController.index = async function (req, res, next) {
    try {
        let herbarios = await herbario.find();
        return res.status(200).json(herbarios);
    } catch (error) {
        return res.status(500).json({ error: error });
    }

};


herbarioController.store = async function (req, res, next) {
    let h = new herbario();
    h.nombre = req.body.nombre;
    h.familia = req.body.familia;
    h.anio = req.body.anio;

    try {
        await h.save();
        return res.status(200).json({ h });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};




module.exports = herbarioController;