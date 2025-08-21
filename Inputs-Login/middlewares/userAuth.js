const userAuth = (req,res,next)=>{
    if(req.cookies.user){
        return next();
    }else{
        return res.redirect('/');
    }
}

module.exports = userAuth;