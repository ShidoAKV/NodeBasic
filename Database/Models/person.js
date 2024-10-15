import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    salary: {
      type: Number,
      required: true
    },
    work: {
      type: String,
      enum: ['chef', 'waiter'],
      required: true  
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  },
  { timestamps: true }  
);


UserSchema.pre('save',async function(next){
  const user=this;
  // this store the new password entered by user
  // hash the password only if it has been modified(or is new)
    
  if(!user.isModified('password')) return next();

  try {
    // hash password generation 
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(user.password,salt);

    // overrride the plain text password with encrypt password
    user.password=hashedpassword;

    next();
  } catch (error) {
    return next(error)
  } 
})
 
UserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    console.log('Stored hashed password:', this.password);
    console.log('Candidate password:', candidatePassword);

    const isMatched = await bcrypt.compare(candidatePassword, this.password);
    return isMatched;
  } catch (error) {
    console.error('Error comparing password:', error);
    throw error;
  }
};

const User = mongoose.model('User', UserSchema);

export default User;
