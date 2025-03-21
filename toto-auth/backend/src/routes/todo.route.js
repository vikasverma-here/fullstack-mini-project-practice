const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
const authMiddleware = require("../middleware/authMiddleware")
router.post("/create",authMiddleware,todoController.createTodo)
router.get("/getTodos",authMiddleware,todoController.getUserTodos)
router.put("/updateTodo/:id",authMiddleware,todoController.updateTodo)
router.delete("/deleteTodo/:id",authMiddleware,todoController.deleteTodo)

module.exports=router