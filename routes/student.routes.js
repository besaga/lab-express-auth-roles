const router = require("express").Router()
const { isLoggedIn, checkRoles } = require("../middlewares");

const User = require("../models/User.model")
const { isPM } = require("/utils")

router.get("/students", isLoggedIn, (req, res, next) => {//lista todos los estudiantes

    User.find()
        .then((allStudents) => res.render("students/students-list", { allStudents }))
})



router.get("/students/:id", (req, res, next) => {
    const { id } = req.params
    User.findById(id)
        .then((student) => res.render("students/student-details", { student }))
})
module.exports = router