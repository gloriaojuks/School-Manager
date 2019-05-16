//Main server file using express
const express = require('express');
const mongoose = require('mongoose');


const app = express();

//setup body-perser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//setup db key
const db = require('./config/keys_dev').mongoURI;

//connect to database
mongoose.connect(db,{useNewUrlParser: true})
    .then(() =>console.log('mongoDb connected'))
    .catch((err) => console.log("Error connecting to Cloud db"));



//Route handler
app.get('/', (reg,res) =>{
    res.json({mssg: 'Hello welcome to the meme api server'})
})

//Port to listen to
const port = process.env.PORT || 5000;
app.listen(port,  () =>{
    console.log(`Server running on port ${port}`)
})

