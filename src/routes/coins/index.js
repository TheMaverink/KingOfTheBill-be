import { Router } from "express";

import getCoins from "@controllers/coins/getCoins";

const router = Router();

router.get("/getCoins", getCoins);

export default router;
