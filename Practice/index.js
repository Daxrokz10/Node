const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine','ejs');
app.use(express.urlencoded());

const db = require('./config/db')
const Employee = require('./models/practice')

app.get('/', async (req,res)=>{
    const all = await Employee.find();
    res.render('index',{employees: all});
});

app.post('/add',async(req,res)=>{
    const data = new Employee(req.body);
    await data.save();
    res.redirect('/');
});

app.post('/employee/delete/:id',async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    await Employee.findByIdAndDelete(id);
    return res.redirect('/');
})
app.post('/employee/edit/:id',async (req,res)=>{
    const {id} = req.params;
    let editEmployee = await Employee.findById(id);
    return res.render('edit',{editEmployee});
});
app.post('/edit',(req,res)=>{
    const {id} = req.params;
    const data = Employee.findByIdAndUpdate(id);
    return res.redirect('index');
})


app.listen(port,(err)=>{
    if(err){
        console.log('Server not deployed');
    }
    else{
        console.log('Server deployed on http://localhost:3000');
    }
})