const mongoose = require('mongoose')

function connect () {
    mongoose.set('useCreateIndex', true);
    // mongoose.connect('mongodb://localhost:27017/complaint-system',
    //     {useNewUrlParser: true,
    //     useUnifiedTopology: true
    //     });
    mongoose.connect('mongodb://localhost/complaintapp',{useNewUrlParser: true})
}

module.exports = connect