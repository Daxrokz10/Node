const mongoose = require('mongoose');
mongoose.mongoose.connect('mongodb+srv://dakshgagnani:sainath96@products.jcrhxnb.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("Database could not be connected");
    console.error(err);
});

