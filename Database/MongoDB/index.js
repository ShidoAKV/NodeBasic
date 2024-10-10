import mongoose from "mongoose";

const MONGOURL="mongodb://localhost:27017/Hotel"
// const DB_NAME = "CRUD";

mongoose.connect(MONGOURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
// db object
const db=mongoose.connection;

db.on('connected',()=>{ 
  console.log("MongoDb connected successfully !!");
  
})
db.on('error',(err)=>{
  console.log("MongoDb connected error !!",err);
})
db.on('disconnected',()=>{
  console.log("MongoDb disconnected successfully !!");
})

export default db;