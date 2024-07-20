const mongoose = require('mongoose')

const ConnectionString = process.env.DATABASE

mongoose.connect(ConnectionString).then(() => {


    console.log("MONGO DB ATLS CONNECTION SUCCESSFULL....!!");


}).catch((ERR) => {

    console.log("MONGODB CONNECTION FAILED");

})