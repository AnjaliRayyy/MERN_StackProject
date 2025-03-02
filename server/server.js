require("dotenv").config();
const express=require("express");
const app=express();
const PORT=5000;
const router=require('./router/auth-router')
const connectDb=require('./utils/db');
const errorMiddleWare = require("./middlewares/error-middleware");
app.use(express.json());

app.use('/user',router);

app.use(errorMiddleWare);

connectDb().then(()=>{
    app.listen(PORT,()=>{
        try{
            console.log(`Server is running on port ${PORT}`);
        }
        catch(err){
            console.log(err);
        }
    })
})
