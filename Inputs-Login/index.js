const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8081;
const db = require('./config/db')
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', require('./routers'))


app.listen(port,(err)=>{
    if(!err){
        db();
        console.log('Server Start online http://localhost:'+port);
        
    }else{
        console.log(err.message);
        
    }
})