require("dotenv").config();
const express=require("express");
const cors=require('cors');
const app=express();
const PORT=5000;
const authRouter=require('./router/auth-router')
const contactRouter=require('./router/contact-router')
const servicesRouter=require('./router/service-router')
const adminRouter=require('./router/admin-router')
const connectDb=require('./utils/db');
const errorMiddleWare = require("./middlewares/error-middleware");

//Handling corse policy issue
const corsOptions = {
    origin: "http://localhost:5173",
    methods : ["GET", "POST"],
    credentials : true,
}
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth',authRouter);
app.use('/api/form',contactRouter);
app.use('/api/data',servicesRouter);
app.use('/api/admin',adminRouter);

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
