const getTeachers = (req, res) => {
    res.json({
        firstName: "Nika",
        lastName: "Beridze",
        subject: "JavaScript"
    });
};

const postTeachers = (req, res) => {
    res.json({
        message: "Teacher added successfully"
    });
};

const updateTeachers = (req, res) => {
    res.json({
        message: "Teacher information updated successfully"
    });
};

const deleteTeachers = (req, res) => {
    res.json({
        message: "Teacher deleted successfully"
    });
};

module.exports = {
    getTeachers,
    postTeachers,
    updateTeachers,
    deleteTeachers
};