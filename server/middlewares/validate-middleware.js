const validate = (schema)=>async(req,res,next)=>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err)
    {
        return res.status(400).json({msg : "Validation failed", error : err})
        // const status="500"
        // const message = "Validation failed"
        // const extraDetails = err.issues[0].message;
        // const error={status,message,extraDetails}
        // next(error);
    }
}

module.exports=validate;