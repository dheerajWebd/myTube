import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});
// strict:false = jo DB me hai wahi sab aa jayega

const User = mongoose.model("Movie", userSchema);

export default User;
