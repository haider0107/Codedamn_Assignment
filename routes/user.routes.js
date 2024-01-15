import { Router } from "express";

const router = Router();

// User register route
router.route("/register").post();

// User login route
router.route("/login").post();

export default router;
