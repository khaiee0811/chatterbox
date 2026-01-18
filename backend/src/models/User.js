import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength: 6,
    },
    profilePic:{
        type:String,
        default: "",
    },
},
    {timestamps: true} // Account creation and updated date
);

const User = mongoose.model("User", userSchema);

export default User;