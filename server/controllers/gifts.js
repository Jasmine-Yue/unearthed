//
import { pool } from "../config/database.js";

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

const createGift = async (req, res) => {
  const {
    name,
    pricepoint,
    audience,
    image,
    description,
    submittedby,
    submittedon,
  } = req.body;

  const values = [
    name,
    pricepoint,
    audience,
    image,
    description,
    submittedby,
    submittedon,
  ];
  const queryText = `insert into gifts(name,pricepoint,audience,image,description,submittedby,submittedon)
                                  values($1,$2,$3,$4,$5,$6,$7) returning * `;
  try {
    const result = await pool.query(queryText, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateGift = async (req, res) => {
  // const { id } = req.params;
  const id = parseInt(req.params.id);
  const queryText = `update gifts  
                     SET name = $1,
                         pricepoint = $2,
                         audience = $3,
                         image = $4,
                         description = $5,
                         submittedby = $6,
                         submittedon = $7
                     WHERE id = $8 
                      returning * `;
  const {
    name,
    pricepoint,
    audience,
    image,
    description,
    submittedby,
    submittedon,
  } = req.body;
  const values = [
    name,
    pricepoint,
    audience,
    image,
    description,
    submittedby,
    submittedon,
    id,
  ];
  try {
    const result = await pool.query(queryText, values);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteGift = async (req, res) => {
  const id = parseInt(req.params.id);
  const queryText = " delete from gifts where id=$1 returning *";
  try {
    const result = await pool.query(queryText, [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getGifts,
  getGiftById,
  createGift,
  updateGift,
  deleteGift,
};
