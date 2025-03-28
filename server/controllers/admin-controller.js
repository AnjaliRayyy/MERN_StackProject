const User=require('../models/user-model')
const Contact=require('../models/contact-model')
const Service=require('../models/services-model');
const { get } = require('mongoose');

const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find({},{_id:0, password : 0});
        console.log(users)
        if(!users || users.length===0){
            return res.status(404).json({message:'No users found'})
        }
        return res.status(200).json(users)
    }
    catch(error){
        next(error);
    }
}

const getAllContacts=async(req,res)=>{
    try{
        const contacts=await Contact.find();
        console.log(contacts)
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:'No contacts found'})
        }
        return res.status(200).json(contacts);
    }
    catch(error){
        next(error);
    }
}

const getAllServices=async(req,res)=>{
    try{
        const services=await Service.find();
        console.log(services)
        if(!services || services.length===0){
            return res.status(404).json({message:'No services found'})
        }
        return res.status(200).json(services);
    }
    catch(error){
        next(error);
    }
}

module.exports={getAllUsers,getAllContacts,getAllServices};