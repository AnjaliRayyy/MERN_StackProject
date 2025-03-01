const User=require('../models/user-model');
const bcrypt = require('bcrypt');

//Home Page Logic
const home=async(req,res)=>{
    try {
        res.send("Welcome to Home page")
    }
    catch(err){
        res.status(404).send("Page not found")
    }
}


//Registration Logic
const register=async(req,res)=>{
    try{
        const {username,email,password,phone}=req.body;

        const userExist =await User.findOne({email:email});  //checking if user already exists
        if(userExist){
            return res.status(400).json({'msg':"User with the email already exists"})
        }

        // Hashing the password
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const userCreated= await User.create({username,email,password,phone});
        res.status(201).json({'msg': "User created successfully", token : await userCreated.generateToken(), userId: userCreated._id.toString() });

    }
    catch(err){
        res.status(500).json("Internal server error")
    }
}


//Login Logic
const login=async(req,res)=>{
try{
    const {email,password}=req.body;
    const userExist =await User.findOne({email:email});  //checking if user already exists
    if(!userExist){
        return res.status(400).json({message : "Invalid Credentials"});
    }

    const isValidPassword = await bcrypt.compare(password, userExist.password);  //comparing the password with the hashed password

    if(isValidPassword){
        res.status(200).json({'msg': "Login successfully"});
    }
    else{
        res.status(400).json({message : "Invalid email or password"});
    }

}
catch(err){
    res.status(500).json("Internal server error");
}
}


module.exports={home,register,login}