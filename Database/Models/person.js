import mongoose from "mongoose";

const Userschema=new mongoose.Schema(
    {
      name:{
        type:String,
        require:true
      },
      age:{
        type:Number,
        require:true
      },
      salary:{
        type:Number,
        require:true
      },
      work:{
        type:String,
        enum:['chef','waiter'],
      },
      email:{
        type:String,
        require:true,
        // unique:true
      },
      address:{
        type:String,
        require:true,
      },
    },{timestamps:true}
)

const User=mongoose.model('User',Userschema);

export default User;
