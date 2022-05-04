import mongoose from "mongoose";

const Task = mongoose.model("Task", {
    nome: String,
    objetivo: String,
    formacao: String,
    experiencias: String,
})

export default Task;
