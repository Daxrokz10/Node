const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    res.render('pages/login');
}

exports.loginHandle = async (req,res)=>{
    try {
        let {username,password} = req.body;
        let existing = await User.findOne({username})
        if(existing && await bcrypt.compare(password,existing.password)){
           return res.redirect('/employee');
        }else{
            console.log('User not found');
           return res.redirect('/');
        }
    } catch (error) {
        console.log("login failed");        
    }
}

exports.signup = (req,res)=>{
    res.render('pages/signup');
}

exports.signupHandle = async (req,res)=>{
    const {username,email,password} = req.body;
    try {
        const existing = await User.findOne({ $or: [{ username }, { email }] });
        if(existing){
            console.log('User already exists');
            return res.redirect('/signup');
        }else{
            const hashed = await bcrypt.hash(password,10);
            const newUser = User.create({username,email,password:hashed});

            return res.redirect('/');
        }
    } catch (error) {
        console.log("error creating new user");
        console.log(error.message);
    }
}