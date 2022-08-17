const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.send('<h1> Hello from express1</h1>');
    console.log('done');
    
});



module.exports=router;