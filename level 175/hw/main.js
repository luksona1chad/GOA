// 1. console test
console.log("Hello Node!");

// 2. express
const express = require("express");
const app = express();
const PORT = 3000;

// 3. მთავარი route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// 4. about route
app.get("/about", (req, res) => {
    res.send("About Page");
});

// 5. user route (JSON)
app.get("/user", (req, res) => {
    res.json({
        name: "Giorgi",
        age: 20,
    });
});

// 6. server start
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log("Current time:", new Date());
});