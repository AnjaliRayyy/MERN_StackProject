const express=require('express');
const router=express.Router();
const contactForm=require("../controllers/contact-controller")
const validate=require("../middlewares/validate-middleware")
const supportSchema=require("../validators/contact-validator")

router.route("/contact").post(validate(supportSchema),contactForm)

module.exports=router;