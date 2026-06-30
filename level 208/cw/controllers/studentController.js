const getStudents = (req, res) => {
    res.json({
        message: "ყველა მოსწავლე"
    });
};

const postStudents = (req, res) => {
    res.json({
        message: "მოსწავლე წარმატებით დაემატა"
    });
};

const updateStudents = (req, res) => {
    res.json({
        message: "მოსწავლე წარმატებით განახლდა"
    });
};

const deleteStudents = (req, res) => {
    res.json({
        message: "მოსწავლე წარმატებით წაიშალა"
    });
};

module.exports = {
    getStudents,
    postStudents,
    updateStudents,
    deleteStudents
};