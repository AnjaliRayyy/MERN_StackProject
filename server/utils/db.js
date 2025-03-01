const mongoose=require("mongoose");
const URI=process.env.MONGODB_URI;

const connectDB=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Database connection successful");
    }
    catch(err){
        console.error("Database connection failed",err);
        process.exit(0);
    }
}

module.exports=connectDB;