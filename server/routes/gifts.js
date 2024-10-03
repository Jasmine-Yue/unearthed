import express from "express";

//import giftData from "../data/gifts.js";

//import getGifts  from "../controllers/gifts.js";
import GiftsController from "../controllers/gifts.js";

import { fileURLToPath } from "url";
import path from "path";

const router = express.Router();

router.get("/", GiftsController.getGifts);

router.get("/:id", GiftsController.getGiftById);

export default router;
