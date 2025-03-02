const {z}=require("zod");

const supportSchema=z.object({
    username : z.string({required_error: "Username is required"})
    .trim()
    .min(3,{message : "Username must be at least 3 characters long"})
    .max(20,{message : "Username must be at most 20 characters long"}),

    email : z.string({required_error : "Email is required"})
    .trim()
    .email({message : "Invalid email address"}),

    message : z.string({required_error : "Message is required"})
    .trim()
    .min(10,{message : "Message must be at least 10 characters long"})
})

module.exports=supportSchema;