const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  age: Number,
  hobby:Array,
  city:String,
  position: String
});

module.exports = mongoose.model('Employee', employeeSchema);
