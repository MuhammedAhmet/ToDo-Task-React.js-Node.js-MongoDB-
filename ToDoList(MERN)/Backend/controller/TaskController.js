const express = require("express");
var router = express.Router();

var ObjectID = require("mongoose").Types.ObjectId;

var {Task} = require("../model/TaskModel");


//get all tasks
router.get("/", (req,res) => {
    Task.find((error,docs) => {
        if(!error){
            res.send(docs);
        }
        else{
            console.log("Error while retrieving data: " + JSON.stringify(error));
            alert("Error");
        }
    })
})

//get task by creator id
router.get("/:id",(req,res) => {
    Task.find({creatorId : req.params.id} , (error,docs) => {
        if(!error){
            res.send(docs);
        }
        else{
            console.log("Error while retrieving data: " + JSON.stringify(error));
            alert("Error");
        }
    })
})

router.post("/", (req,res) => {
    var NewRecord = new Task({
        task : req.body.task,
        creatorId : req.body.creatorId
    })

    NewRecord.save((err,doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            console.log("Error while creating new record" + JSON.stringify(err));
        }
    })
})

router.put("/:id",(req,res)=>{
    
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send("No record with given id : " + req.params.id)    
    }
    
    var updatedRecord = {
        task : req.body.task,
        creatorId : req.body.creatorId
    }
    
    Task.findByIdAndUpdate(req.params.id,{$set : updatedRecord},{new:true},(err,docs)=>{   //new : true   --> to see updated version on postman
        if(!err){
            res.send(docs);
        }
        else{
            console.log("ERROR while updating a record : "+JSON.stringify(err,undefined,2));
        } 
    })

})

router.delete("/:id", (req,res) => {

    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send("No record with given id : " + req.params.id)    
    }

    Task.findByIdAndDelete(req.params.id,(err,docs) => {
        if(!err){
            res.send(docs);
            //console.log("deleted successfully");
        }
        else{
            console.log("ERROR while deleting a record : "+JSON.stringify(err,undefined,2));
        }
    })
})


module.exports = router;