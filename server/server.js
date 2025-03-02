require("dotenv").config();
const express=require("express");
const app=express();
const PORT=5000;
const authRouter=require('./router/auth-router')
const contactRouter=require('./router/contact-router')
const connectDb=require('./utils/db');
const errorMiddleWare = require("./middlewares/error-middleware");
app.use(express.json());

app.use('/api/auth',authRouter);
app.use('/api/form',contactRouter);

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
