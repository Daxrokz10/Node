const Employee = require('../models/employee.models');

exports.create = async (req, res) => {
    try {
        await res.render('index');
    } catch (error) {
        console.log(error.message);
    }
};

exports.addEmployee = async (req, res) => {
    try {
        await Employee.create(req.body);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
};

exports.showData = async (req, res) => {
    try {
        let emp = await Employee.find({});
        return res.render('pages/showData', { emp });
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
};

exports.deleteEmployee = async (req,res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        return res.redirect('/employee/showData');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/employee/showData');
    }
}

exports.editEmployee = async (req,res) => {
    try {
        let editEmp = await Employee.findById(req.params.id);
        return res.render('pages/editEmp', { editEmp });
    } catch (error) {
        console.log(error.message);
        return res.redirect('/employee/showData');
    }
}

exports.updateEmp = async (req,res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect('/employee/showData');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/employee/showData');
    }
}