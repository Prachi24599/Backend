import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        createdAt:{
            type:String,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:String,
            required:true,
            default:Date.now()
        }
    }
)

//When we export the schema, It is class which contains properties and objects
// module.exports = mongoose.model("Todo", todoSchema);
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;