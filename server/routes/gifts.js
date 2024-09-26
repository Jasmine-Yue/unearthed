import express from "express";

//import giftData from "../data/gifts.js";

//import getGifts  from "../controllers/gifts.js";
import GiftsController from "../controllers/gifts.js";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__filename: ", __filename);
console.log("__dirname: ", __dirname);

const router = express.Router();

/* router.get("/", (req, res) => {
  res.status(200).json(giftData);
});
 */

router.get("/", GiftsController.getGifts);

/* router.get("/:giftId", (req, res) => {
  res
    .status(200)
    .json(giftData.find((gift) => gift["id"] === parseInt(req.params.giftId)));
}); */

router.get("/:giftId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/gift.html"));
});

export default router;
