const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.get('/',require('./routers'));

app.listen(port,(err)=>{
    if(!err){
        console.log('Server online on port http://localhost:'+port);
    }else{
        console.log(err.message);
    }
})