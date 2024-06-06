const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')
const connectDB = require('./database/connectDB')

const Port = 8000

app.listen(Port,function(){
    console.log(`server is runing at http://localhost:${Port}`);
    connectDB()
})