const express = require("express");
const router = express.Router();

const {
    getStudents,
    postStudents,
    updateStudents,
    deleteStudents
} = require("../controllers/studentController");

router.get("/student", getStudents);
router.post("/student", postStudents);
router.put("/student", updateStudents);
router.delete("/student", deleteStudents);

module.exports = router;