const Service=require('../models/services-model')

const services=async(req,res)=>{
    try{
        const response = await Service.find();
        if(!response){
            return res.status(404).json({message:'No services found'})
        }
        return res.status(200).json({"message": response});
    }
    catch(err){
        console.log("Error in services : ",err);
    }
}

module.exports=services;
