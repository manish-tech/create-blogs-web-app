require("dotenv").config({path:__dirname + "/.env"});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/db.js");
const authRouter = require("./routes/auth");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(authRouter);
const PORT = "8080";
const HOST = "localhost";

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

connection.connect((err)=>{
    if(!err){
        app.listen(PORT,HOST,()=>{
            console.log("listening to "+ PORT + "...");
        })
    }else{
        console.log("Failed to connect database");
    }
});
