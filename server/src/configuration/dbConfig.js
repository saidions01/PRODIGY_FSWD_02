const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_DB' , { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',() =>{
    console.log('connected To MongoDB');
})

mongoose.connection.on('error',(err) =>{
    console.error(`MongoDB connection error : ${err}`);
})
 
  


module.exports = { mongoose }