const express=require('express');
const router=express.Router();
const adminControllers=require('../controllers/admin-controller')

router.route('/users').get(adminControllers.getAllUsers);
router.route('/contact').get(adminControllers.getAllContacts);
router.route('/service').get(adminControllers.getAllServices);
module.exports=router;