//
import { pool } from "../config/database.js";

//s2
const getGifts = async (req, res) => {
  try {
    const results = await pool.query(" select * from gifts ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//add an asynchronous function called getGiftById() with parameters req and res.
const getGiftById = async (req, res) => {
  try {
    const results = await pool.query(
      ` select * from gifts where id=${req.params.id}`
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getGifts,
  getGiftById,
};
