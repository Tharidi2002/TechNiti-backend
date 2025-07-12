import {Router} from "express";
import {authenticateUser} from "../controller/auth.controller";


const authRoutes:Router = Router();

authRoutes.post("/login", authenticateUser)

export default authRoutes;