import express from "express";

//import giftData from "../data/gifts.js";

//import getGifts  from "../controllers/gifts.js";
import GiftsController from "../controllers/gifts.js";

import { fileURLToPath } from "url";
import path from "path";

const router = express.Router();

router.get("/", GiftsController.getGifts);

router.get("/:id", GiftsController.getGiftById);

router.post("/", GiftsController.createGift);

router.patch("/:id", GiftsController.updateGift);

router.delete("/:id", GiftsController.deleteGift);

export default router;
