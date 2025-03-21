const Todo = require("../models/todo.model")
const mongoose =require("mongoose")
module.exports.createTodo =async (req,res)=>{
    try{
        const { title, description, status, dueDate } = req.body;

        if(!title||!description||!dueDate){
            return res.status(400).json({success:false,message:"Please add all details "})
        }
  

        const allowedStatuses = ["pending", "in-progress", "completed"];
        if (status && !allowedStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status value. Allowed values: pending, in-progress, completed" });
          }


    const newTodo = await Todo.create({
        userId:req.user.userId,
        title,
        description,
        status :status || "pending",
        dueDate
    })

    res.status(201).json({success:true,message:"Todo Created Successully",todo:newTodo})

    }catch(error){
        console.error("Create Todo Error ",error)
        return res.status(500).json({success:false,message:"Internal Server Error !"})
    }
    
}




module.exports.getUserTodos = async (req, res) => {
    try {
        const userId = req.user?.userId; 

       
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized! Please log in." });
        }

        
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID format" });
        }

      
        const todos = await Todo.find({ userId });

       
        if (todos.length === 0) {
            return res.status(404).json({ success: false, message: "No todos found for this user" });
        }

       
        res.status(200).json({ success: true, todos });

    } catch (error) {
        console.error("Get Todos Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

