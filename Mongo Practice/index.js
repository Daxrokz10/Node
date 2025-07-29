const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.port || 3000;


const db = require('./config/db');
const Book = require('./models/books');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/add',async (req,res)=>{
    const book = new Book(req.body);
    await book.save();
    res.redirect('/');
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server not working");
        console.log(err.message);
    }else{
        console.log("Server online on port http://localhost:"+port);
    }
})