
// src/routes/user.route.ts
import { Router } from "express";
import { getAllUsers } from "../controller/user.controller";



const routes = Router();


routes.get("/", getAllUsers)

export default routes