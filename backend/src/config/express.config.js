const express= require('express')
const cors= require('cors')
require('dotenv').config()
const mongoose= require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/api/test" , (req,res)=>{
    res.json("hello from express")
} )

module.exports = app;