//auth and register endpoint
import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

//register user
router.post("/register", register);
router.post("/login", login);

export default router;
