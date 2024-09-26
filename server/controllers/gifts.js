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

export default {
  getGifts,
};
