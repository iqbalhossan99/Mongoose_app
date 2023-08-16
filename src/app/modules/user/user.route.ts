import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.post("/createuser", createUser);
router.get("/:id", getUserById);

export default router;  