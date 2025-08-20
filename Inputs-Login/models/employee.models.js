const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    age:Number,
    city:String,
    gender:String,
    hobby:Array,
    department:String,
    salary:Number,
})

const Employee = mongoose.model('employees',employeeSchema);

module.exports = Employee;