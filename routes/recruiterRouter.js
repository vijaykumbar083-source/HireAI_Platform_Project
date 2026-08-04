const express=require('express');
const controller=require("../controllers/recruiterController")

const router=express.Router();

router.get('/',controller.recruiterdashboard);

module.exports=router;