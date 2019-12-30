  
const mongoose = require('mongoose')

mongoose.connect(process.env.MLAB_CONNECTION_STRING,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;




module.exports = mongoose;