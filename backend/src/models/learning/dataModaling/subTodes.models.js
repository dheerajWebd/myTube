import mongoose from "mongoose";

const subTodos = new mongoose.Schema({
    Subtitle: {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
    { timestamps: true }
)