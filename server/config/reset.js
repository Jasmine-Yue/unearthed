/* s1: Import the following:
the pool from database.js
the dotenv.js file
the giftData from data/gifts.js */

//postgresql://postgres:ozZMKiIzLlKwmOlPNuUOHUkfoLOkbHMm@autorack.proxy.rlwy.net:44996/railway

import { pool } from "./database.js";
import config from "./dotenv.js";

import giftData from "../data/gifts.js";

//s2: create table
const createGiftsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS gifts;
    CREATE TABLE IF NOT EXISTS gifts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint VARCHAR(10) NOT NULL,
        audience VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`;

  // query the pool with the createTableQuery.
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gifts table", err);
  }
};

const seedGiftsTable = async () => {
  await createGiftsTable();
  loadGiftsTable();
};

//s3:load data
const loadGiftsTable = () => {
  giftData.forEach((gift) => {
    const insertQuery = {
      text: "INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };
    const values = [
      gift.name,
      gift.pricePoint,
      gift.audience,
      gift.image,
      gift.description,
      gift.submittedBy,
      gift.submittedOn,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting gift", err);
        return;
      }
      console.log(`✅ ${gift.name} added successfully`);
    });
  });
};

seedGiftsTable();
