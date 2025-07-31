const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine','ejs');
app.use(express.urlencoded());

const db = require('./config/db')
const Practice = require('./models/practice')

app.get('/', async (req,res)=>{
    const all = await Practice.find();
    res.render('index',{practices: all});
});

app.post('/add',async(req,res)=>{
    const data = new Practice(req.body);
    await data.save();
    res.redirect('/');
})

app.listen(port,(err)=>{
    if(err){
        console.log('Server not deployed');
    }
    else{
        console.log('Server deployed on http://localhost:3000');
    }
})