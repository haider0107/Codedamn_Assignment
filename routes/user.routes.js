import { Router } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controller/user.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

// User register route
router.route("/register").post(registerUser);

// User login route
router.route("/login").post(loginUser);

// Protected route
router.route("/current-user").get(verifyToken, getCurrentUser);

export default router;
