const express = require('express');
const authRouter = express.Router();
const {login , loginHandle , signup , signupHandle , logutHandle } = require('../controllers/auth.controller');


authRouter.get('/',login);
authRouter.post('/login', loginHandle);

authRouter.get('/signup',signup);
authRouter.post('/signup',signupHandle);

authRouter.get('/logout',logutHandle);

module.exports = authRouter;