const express=require('express');
const router=express.Router();
const authControllers=require("../controllers/auth-controller");

router.get('/home',authControllers.home);

router.route("/auth/register")
.post(authControllers.register)

router.route("/login").post(authControllers.login)

module.exports=router;