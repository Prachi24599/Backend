//import the model
import Todo from "../models/Todo.js"

//Define route handler
const deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success : true,
            message : "Todo Deleted"
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            data : "Internal server error",
            message : err.message,
        })
    }
}   

// Export the createTodo function
export default deleteTodo;