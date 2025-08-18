import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
  pin: { 
    type: Number, 
    required: true, 
    unique: true },
  name: { 
    type: String,
    required: true ,
    trim: true,
    lowercase: true,
    maxLenght:50,
    minLenght:3
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true,
    maxLenght:50,
    minLenght:3
  },
  password: { 
    type: String, 
    required: true 
  },
  gender: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  phone: { 
    type: Number, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  profilePicture: {
        type: String,
    },
},{
    timestamps: true
})

userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
const User = model("User", userSchema);

export default User;
