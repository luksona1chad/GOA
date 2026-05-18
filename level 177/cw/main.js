import express from "express";

// პორტის განსაზღვრა
const port = 3000;

// express აპლიკაციის შექმნა
const app = express();

// GET route
app.get("/lomi", async (request, respond) => {
  respond.send({
    message: "this is my first message"
  });
});

// სერვერის გაშვება
app.listen(port, () => {
  console.log("Server started on port", port);
});