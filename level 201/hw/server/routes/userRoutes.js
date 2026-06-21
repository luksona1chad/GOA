import express from "express"

const router = express.Router()

router.get("/users", (req, res) => {
    res.json(["Gio", "Luka", "Nika"])
})
export default router