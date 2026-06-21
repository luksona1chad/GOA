import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

const BASE_URL = "http://localhost:5173";

app.use(express.json());

app.use(
    cors({
        origin: BASE_URL,
    }),
);

app.get("/api/lion", (req, res) => {
    try {
        res.status(200).json({ message: "Mxari + tedzo" });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});