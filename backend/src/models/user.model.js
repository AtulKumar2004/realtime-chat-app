import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type:String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },{timestamps: true}
);

const User = mongoose.model("User",userSchema); // we created a model called User which is depending on the userSchema

export default User;