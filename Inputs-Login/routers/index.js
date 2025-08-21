const express = require('express');
const router = express.Router();

const employeeRouter = require('./emp.routes');
const authRouter = require('./auth.routes');
const userAuth = require('../middlewares/userAuth')

router.use('/employee',userAuth,employeeRouter);
router.use('/',authRouter)

module.exports = router;
