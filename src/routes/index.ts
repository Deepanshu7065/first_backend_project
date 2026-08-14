// src/routes/index.ts

import { Router } from "express";
import userRoutes from "./user.route";
import productroutes from "./product.route";

const rootRouter = Router();

rootRouter.use("/users", userRoutes);
rootRouter.use("/products", productroutes)

export default rootRouter;