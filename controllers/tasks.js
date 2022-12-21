const Tasks = require('../models/tasks')
const getAllTasks = async (req, res) => {
  try{
    const allTask = await Tasks.find({})
    res.status(200).json(allTask) // status code 201 is for successful post request
  }catch(err){
    res.status(500).json({error:err}) 
  }
};

const createTask = async (req, res) => {
  try{
    const createdTask = await Tasks.create(req.body)
    res.status(201).json(createdTask) // status code 201 is for successful post request
  }catch(err){
    res.status(500).json({error:err}) 
  }
 
};

const getTask = async (req, res) => {
  try{
    const getoneTask = await Tasks.findOne({_id:req.params.id})
    res.status(200).json(getoneTask)
  }catch(err){
    res.status(400).json({error:err}) 
  }
};

const updateTask = async (req, res) => {
  try{
    const updateTask = await Tasks.findOneAndUpdate({_id:req.params.id}, req.body)
    res.status(200).json(updateTask)
  }catch(err){
    res.status(400).json({error:err}) 
  }
};

const deleteTask = async (req, res) => {
  try{
    const deleteTask = await Tasks.deleteOne({_id:req.params.id})
    res.status(200).json(deleteTask)
  }catch(err){
    res.status(400).json({error:err}) 
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
