const express=require('express');
const router=express.Router();
const authControllers=require("../controllers/auth-controller");
const {signupSchema,loginSchema}=require("../validators/auth-validator")
const validate=require("../middlewares/validate-middleware")


router.get('/home',authControllers.home);

router.route("/register")
.post(validate(signupSchema),authControllers.register)

router.route("/login").post(validate(loginSchema),authControllers.login)

module.exports=router;