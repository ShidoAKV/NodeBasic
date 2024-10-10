import mongoose from "mongoose";

const Menu=new mongoose.Schema(
    {
        name:{
           type:String,
           require:true
        },
        salary:{
            type:Number,
            require:true,
            default:1000
         },
         taste:{
            type:String,
            enum:["spicy","sweet","sour"],
            require:true
         }

    },
    {timestamps:true}
    
)

const MenuItem=mongoose.model('MenuItem',Menu);

export default MenuItem;