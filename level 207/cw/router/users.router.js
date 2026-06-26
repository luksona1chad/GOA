import { Router } from "express";
import {
    getUsers,
    deleteUsers,
    postUsers,
    updateUsers,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/user", getUsers);
router.post("/user", postUsers);
router.delete("/user", deleteUsers);
router.put("/user", updateUsers);

export default router;