const express = require('express')
const Task = require('../models/models')
const router = express.Router()

router.get('/' , async (req,res) => {
 await Task.find().then((docs)=>{
    res.json(docs)
  console.log("find sucess");
  }).catch((err)=>{
    console.log("find fail",err);
  })
})

router.post('/',async(req,res) => {
    const task = new Task(req.body)
   await task.save().then(()=>{
        console.log("success to save");
    }).catch((err)=>{
        console.log("Error to save");
    })
})

router.put('/:id',(req,res) => {
    Task.findOneAndUpdate({
        _id : req.params.id},req.body,{new : true }).then((doc)=>{
            res.json(doc)
        }).catch((err)=>{
            console.log("errrrr");
        })
})

router.delete('/:id',(req,res) => {
    Task.findByIdAndDelete(req.params.id).then(()=>{
        console.log("?:id");
    }).catch((err)=>{
        console.log("erro?:id");
    })
})

module.exports = router