const express = require("express");
const mongoose = require("mongoose")
const userRouter = require("./routes/user")

const app = express();
mongoose.connect("mongodb://localhost:27017/med-care").then(()=>console.log("DB connected"))

app.use(express.json()) //for json input

app.get("/",(req,res)=>{
res.send("Hello");
})

app.use("/",userRouter)

app.listen(8000,()=>{console.log("App is started")})