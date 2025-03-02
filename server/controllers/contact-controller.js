const Contact=require('../models/contact-model');

const contactForm=async(req,res)=>{
    try{
        const {username,email,message}=req.body;
        const contactCreated= await Contact.create({username,email,message});
    res.status(201).json({'msg': "Message was sent succesfully"});
    }
    catch(err){
        res.status(500).json({"msg":"Message could not be sent",err :err});
    }
}

module.exports=contactForm;