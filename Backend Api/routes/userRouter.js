const express =  require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/show',async(req,res)=>{
  
    try {
         const userRecord = await User.find()
         console.log(userRecord)
         res.json(userRecord)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})



module.exports = router


router.get('/test',async(req,res)=>{
    const name = 'user2'
    const email = 'user2@xyz.com'
    const phoneNumber = 1789723492

    const userRecord = new User({name,email,phoneNumber})
    await userRecord.save()
    console.log('inserted')

    
})