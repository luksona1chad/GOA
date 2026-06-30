const express = require("express");
const router = express.Router();

const {
    getTeachers,
    postTeachers,
    updateTeachers,
    deleteTeachers
} = require("../controllers/teacherController");

router.get("/teacher", getTeachers);
router.post("/teacher", postTeachers);
router.put("/teacher", updateTeachers);
router.delete("/teacher", deleteTeachers);

module.exports = router;