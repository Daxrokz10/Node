const express = require('express');
const router = express.Router();

const employeeRouter = require('./emp.routes');
const authRouter = require('./auth.routes');

router.use('/employee', employeeRouter);
router.use('/',authRouter)

module.exports = router;
