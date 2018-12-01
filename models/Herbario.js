const mongoose = require('mongoose');
const {Schema} = mongoose;

const herbariosSchema = new Schema({
    nombre: {type: String},
    familia: {type: String},
    anio: {type: Date}
});


module.exports = mongoose.model('herbarios', herbariosSchema);