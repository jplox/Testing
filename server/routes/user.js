const express = require('express');
const router = express.Router();
const User = require('../models/user')


/**
 * Getting All the Schema
 */
router.get('/' , async(req , res)=>{
    try{
       const data =  await User.find();
       res.json(data)  //
    }
    catch(err){
        res.send('Error', err)
    }
}) 


/**
 * For Getting Paticular Schema
 */

router.get('/:id' , async(req , res)=>{
    try{
        const data = await User.findById(req.params.id);  
        res.json(data)
    }
    catch(err){
        res.send('invalid id') // if invalid id is given
    }
})

/**
 * Post Schema
 */
router.post('/', async(req,res)=>{
        const users = new User({   //client side data
        name:req.body.name
    })
    try{
      const a = await users.save();
      res.json(a)
    }
    catch(err){
       res.send(err)
    }
})


/**
 * Patch Update
 */
router.patch('/:id' , async(req, res)=>{
    try{
          const getDataById = await User.findById(req.params.id)  //Grabs schema by paticular id   // User contain schema
          getDataById.name = req.body.name;
          const data = await getDataById.save()
          res.json(data)
    }
    catch(err){
        res.sendStatus(404)
    }
})

/**
 * Delet Whole Schema
 */
router.delete('/' , async(req , res)=>{
    try{
       const data =  await User.deleteMany();
       res.json('successfully deleted')  //
       res.sendStatus(200)
    }
    catch(err){
        res.send(err)
    }
}) 


/**
 * Delete by Paticular id
 */
router.delete('/:id', async(req , res)=>{
    try{
        const a = await User.findByIdAndDelete(req.params.id)
        res.send('sucessfully deleted')
        res.sendStatus(200)
    }
    catch(err){
        res.send()
    }
})



/**
 * Less then
 */

module.exports = router;
