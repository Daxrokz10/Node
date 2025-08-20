module.exports.home = (req,res)=>{
    res.render('index');
}

module.exports.showAddProduct = (req,res)=>{
    res.render('product');
};

module.exports.addProduct = async(req,res)=>{
    try{
        const Product = require('../models/productSchema');
        const product = new Product(req.body);
        await product.save();
        console.log('Product added successfully:', product);
        res.redirect('/products'); // Show the form again after saving
    }catch(error){
        console.log(error);
    }
}