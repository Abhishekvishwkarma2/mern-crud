const connectToMongo = require('./db');
const express = require('express');
const User = require("./models/userModel")
connectToMongo();
const app = express();
const port = 5000
app.use(express.json());
app.get('/', (req,res) => {
  res.send("API is running...")
});
app.get('/user', async(req,res) => {
  try{
    const users =await User.find({})
    res.status(200).json(users);
  } catch(error){
    res.status(500).json({message:error.message})
  }
});
app.get('/user/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const users =await User.findById(id)
    res.status(200).json(users);
  } catch(error){
    res.status(500).json({message:error.message})
  }
});
app.put('/user/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const users =await User.findByIdAndUpdate(id,req.body);
    if(!users){
      return res.status(404).json({message:"product not found by id " + id});
    }
    const updateUsers = await User.findById(id);
    res.status(200).json(updateUsers);
  } catch(error){
    res.status(500).json({message:error.message})
  }
});
app.post('/user',async(req,res) => {
  try{
    const users =await User.create(req.body)
    res.status(200).json(users)
  } catch(error){
    res.status(500).json({message:error.message})
  }
});
app.delete('/user/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const users =await User.findByIdAndDelete(id);
    if(!users){
      return res.status(404).json({message:"product cannit found"});
    }
    res.status(200).json(users);
  } catch(error){
    res.status(500).json({message:error.message})
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
