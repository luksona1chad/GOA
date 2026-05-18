const express = require("express");
const app = express();

const mainRouter = require("./routes/route");

app.use(express.json());
app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});