const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const url = process.env.MONGO_URL

const connectDb  = async()=>{
    try{
        const conn = await mongoose.connect(url)
        console.log(conn.connection.host)
    }
    catch(e){
        console.log("Connection Erro:",e)
        process.exit(1)
    }
    
}

module.exports = connectDb