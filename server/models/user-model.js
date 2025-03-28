const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    username:{
        type :String,
        required:true,
        unique : true,
    },
    email:{
        type : String,
        required:true,
        unique : true,
    },
    password:{
        type:String,
        required:true,
    },
    phone : {
        type : Number,
        required: true,
    },
    isAdmin:{
        type : Boolean,
        default : false,
    }
})


//Password Hashing
userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")){
        next();
    }

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    }
    catch(err){
        next(err);
    }
})

//json web tokens
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "30d",
        }
    ) 
    }
    catch(err){
        next(err);
    }

}

//Verifying password
userSchema.methods.comparePassword = async function(password){
    return  bcrypt.compare(password, this.password);
}


//defining the model or the collection name
const User=new mongoose.model("users",userSchema);
module.exports=User;