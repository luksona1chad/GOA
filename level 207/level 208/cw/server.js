const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get("/student", (req, res) => {
    res.json({
        name: "Nika",
        surname: "Beridze",
        age: 16
    });
});

app.post("/student", (req, res) => {
    res.json({
        message: "მოსწავლე წარმატებით დაემატა"
    });
});

app.delete("/student", (req, res) => {
    res.json({
        message: "მოსწავლე წარმატებით წაიშალა"
    });
});

app.use("/api", studentRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});