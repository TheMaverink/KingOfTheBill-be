import { Router } from "express";
import dotenv from "dotenv";

import coinsRoutes from "./coins";

dotenv.config({ path: ".env" });

const router = Router();

router.use("/coins", coinsRoutes);

export default router;
