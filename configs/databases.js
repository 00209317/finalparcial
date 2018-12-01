const moongose = require ('mongoose');
const {mongodb} = require('./keys');

moongose.connect(mongodb.URI,{
    useNewUrlParser:true,
    useCreateIndex:true
})
.then(db => console.log('Conexion succesful').catch(err => console.log(err)));