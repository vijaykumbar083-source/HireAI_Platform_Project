const express=require('express');
const Controller=require('../controllers/userController')
const router=express.Router();


router.get('/',Controller.home);
router.get('/user_dashboard',Controller.user_dashboard);

module.exports=router;