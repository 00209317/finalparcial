const moongose = require('mongoose');
const {Schema} = moongose;

const herbariosSchema = new Schema({
    materia: {type: String},
    uv: {type: String},
    descripcion: {type: String}
});


module.exports = moongose.model('herbarios', herbariosSchema);