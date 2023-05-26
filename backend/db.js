const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://root:Admin123@cluster0.lau2hh2.mongodb.net/";
const connectToMongo = ()=>{
    mongoose.connect(mongoURL).then(()=>{
        console.log("Connected");
      }).catch(()=>{
        console.log("Not Connected");
      })
}
module.exports = connectToMongo;