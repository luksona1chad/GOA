import { Router } from "express";
import usersRouters from "./users.router.js";

const router = Router();

router.use(usersRouters); // /users

export default router;