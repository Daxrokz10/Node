const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine','ejs');
app.use(express.urlencoded());

const db = require('./config/db')
const Employee = require('./models/practice')

app.get('/', async (req,res)=>{
    const all = await Employee.find();
    res.render('login',{employees: all});
});
app.post('/',async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    Employee.findOne({email: email, password: password})
        .then((data) => {
            if (data) {
                res.redirect('/home');
            } else {
                res.render('login', { message: 'Invalid email or password' });
            }
        })
        .catch((err) => {
            console.error('Error during login:', err);
            res.status(500).send('Internal Server Error');
        });
})

app.get('/home', async (req,res)=>{
    const all = await Employee.find();
    res.render('index',{employees: all});
});

app.post('/add',async(req,res)=>{
    const data = new Employee(req.body);
    await data.save();
    res.redirect('/home');
});

app.post('/employee/delete/:id',async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    await Employee.findByIdAndDelete(id);
    return res.redirect('/home');
})
app.post('/employee/edit/:id',async (req,res)=>{
    const {id} = req.params;
    let editEmployee = await Employee.findById(id);
    return res.render('edit',{editEmployee});
});
app.post('/editedData/:id', (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;

    Employee.findByIdAndUpdate(id, { email, password }, { new: true })
        .then(() => res.redirect('/home'))
        .catch((err) => {
            console.error('Error updating employee:', err);
            res.status(500).send('Error updating employee');
        });
});


app.listen(port,(err)=>{
    if(err){
        console.log('Server not deployed');
    }
    else{
        console.log('Server deployed on http://localhost:3000');
    }
});