var express = require("express");
const studentController = require("../controller/user/studentController");

var router = express.Router();
/* GET users listing. */
router.get("/getStudents", studentController.getStudents);
//router.post("/createStudent", studentController.createStudent);
console.log("studentrouter");
module.exports = router;