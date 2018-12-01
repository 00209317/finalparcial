const moongose = require('mongoose');
const {Schema} = moongose;

const herbariosSchema = new Schema({
    nombre: {type: String},
    familia: {type: String},
    anio: {type: String}
});


module.exports = moongose.model('herbarios', herbariosSchema);