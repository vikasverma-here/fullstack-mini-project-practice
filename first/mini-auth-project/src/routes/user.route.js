const express =require("express")
const router = express.Router()
const userController = require("../controllers/User.controller")
const {signUpValidator,authMiddleware} =require("../middleware/AuthValidation")


router.post("/signUp",signUpValidator,userController.signUp)
router.post("/login",userController.login)
router.post("/logout",userController.logout)
router.get("/profile",authMiddleware,userController.userProfile)


module.exports = router