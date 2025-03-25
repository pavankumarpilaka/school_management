const db = require("../db");

// Create Schools Table
const createTable = () => {
  const query = `
      CREATE TABLE IF NOT EXISTS schools (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          latitude DOUBLE NOT NULL,
          longitude DOUBLE NOT NULL
      )`;
  db.query(query, (err) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Schools table is ready!");
    }
  });
};

// Insert a new school
const addSchool = (name, address, latitude, longitude, callback) => {
  const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], callback);
};

// Get all schools
const getAllSchools = (callback) => {
  const query = "SELECT id, name, address, latitude, longitude FROM schools";
  db.query(query, callback);
};

module.exports = { createTable, addSchool, getAllSchools };
