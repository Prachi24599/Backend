//import the model
import Todo from "../models/Todo.js"

//Define route handler
const getTodo = async(req, res) => {
    try{
        // fetch all the todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success : true,
            data : todos,
            message : "Data is fetched successfully."
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            error : err?.message,
            message : "Server Error"
        })
    }
}   

// Export the getTodo function
export default getTodo;