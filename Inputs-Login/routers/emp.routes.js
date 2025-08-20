const express = require('express');
const router = express.Router();
const {create,addEmployee,showData,deleteEmployee, editEmployee,updateEmp } = require('../controllers/emp.controller');

router.get('/',create);
router.post('/addEmployee',addEmployee);
router.get('/showData', showData);
router.get('/delete/:id', deleteEmployee);
router.get('/edit/:id', editEmployee);
router.post('/edit/:id', updateEmp)

module.exports = router;