const studentService = require("../../service/studentService");
const userController = require("./userController");

module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const { fistname, lastname, email, phoneNumber, ...Student } = req.body;
    // console.log({
    //   firstname: fistname,
    //   lastname: lastname,
    //   email: email,
    //   phoneNumber: phoneNumber,
    // });
    const creteUser = await userController.createUserhelper({
      firstname: fistname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
    });
    const creatStudent = await studentService.createStudent({
      userId: creteUser.id,
      rollNumber: Student.rollNumber,
      department: Student.department,
      semester: Student.semester,
    });

    res.send(creatStudent);
  },
};
