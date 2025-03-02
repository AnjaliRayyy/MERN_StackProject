const {z}=require("zod");

//Creating a schema for user
const signupSchema=z.object({
    username : z.string({required_error : "Name is required"})
    .trim()
    .min(3,{message : "Username must be at least 3 characters long"})
    .max(20,{message : "Username must be at most 20 characters long"}),

    email : z.string({required_error : "Email is required"})
    .trim()
    .email({message : "Invalid email address"}),

    password : z.string({required_error : "Password is required"})
    .trim()
    .min(8,{message : "Password must be at least 8 characters long"})
    .max(1024,{message : "Password can't be greater than 1024 characters"}),

    phone : z.string({required_error : "Phone number is required"})
    .trim()
    .min(10,{message : "Phone number must be at least 10 digits long"})
    .max(15,{message : "Phone number must be at most 15 digits long"}),

})

const loginSchema=z.object({
    email : z.string({required_error : "Email is required"})
    .trim()
    .email({message : "Invalid email address"}),

    password : z.string({required_error : "Password is required"})
    .trim()
    .min(8,{message : "Password must be at least 8 characters long"})
    .max(1024,{message : "Password can't be greater than 1024 characters"}),
})

module.exports= {signupSchema,loginSchema};