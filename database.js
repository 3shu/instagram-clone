const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/instagram-clone';

mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose;    