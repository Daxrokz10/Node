const mongoose = require('mongoose');

mongoose.mongoose.connect('mongodb://localhost:27017/learningdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("Database could not be connected");
})

