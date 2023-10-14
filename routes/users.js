const express = require("express");
const router = express.Router();
const userController = require("../controller/user/userController");
const studentController = require("../controller/user/studentController")


router.get("/", userController.getUser);
router.post("/createUser", userController.createUser);

router.post("/createStudent", studentController.createStudent);
console.log("userrouter");
module.exports = router;
