import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoTitle: {
        type: String,
        trim: true,
        required: true,
    },
    createdby: {
        type: String,
        required: true,
        trim: true
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, { timestamps: true })
