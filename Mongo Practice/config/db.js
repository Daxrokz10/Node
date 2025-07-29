const mongoose = require('mongoose');

mongoose.mongoose.connect('mongodb://localhost:27017/learningdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
