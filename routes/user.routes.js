import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controllers.js";

const router = Router();

// User register route
router.route("/register").post(registerUser);

// User login route
router.route("/login").post(loginUser);

export default router;
