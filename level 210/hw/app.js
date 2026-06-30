const express = require("express");

const app = express();
const teacherRoutes = require("./routes/teacherRoutes");

app.use(express.json());

// დავალება 1
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Express Server"
    });
});

// დავალება 5
app.use("/api", teacherRoutes);

// დავალება 2
app.get("/teacher", (req, res) => {
    res.json({
        firstName: "Nika",
        lastName: "Beridze",
        subject: "JavaScript"
    });
});

// დავალება 3
app.post("/teacher", (req, res) => {
    res.json({
        message: "Teacher added successfully"
    });
});

// დავალება 4
app.put("/teacher", (req, res) => {
    res.json({
        message: "Teacher information updated successfully"
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});