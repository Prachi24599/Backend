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

const getTodoById = async (req, res) => {
    try{
        //extract todo items based on id
        const id = req.params.id;
        const todo = await Todo.find({_id : id})

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success : false,
                message : "No data found with given id"
            })
        }
        //data for given id is found
        res.status(200).json({
            success : true,
            data : todo,
            message :  `Todo ${id} data is successfully fetched`
        })
    }   
    catch{
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
export default {getTodo, getTodoById};