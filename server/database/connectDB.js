const mongooss = require("mongoose")
const mongoUrl = process.env.MONGODB_URL

const connectDB =()=>{
    mongooss.connect(mongoUrl)
    .then(()=>{
        console.log('database connect successfull');
    }).catch(()=>{
        console.log('database not connect');
    })
}

module.exports = connectDB