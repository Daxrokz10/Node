let users = [];


const express = require('express');

const app = express();
const PORT = 9696;

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    return res.render('index.ejs', { users });
});

app.post('/signup',(req,res)=>{
    let data = {
        email : req.body.email,
        password : req.body.password
    };
    users.push(data);
    return res.redirect('/');
})

app.listen(PORT,()=>{
    console.log('Server running on http://localhost:',PORT);
    
})