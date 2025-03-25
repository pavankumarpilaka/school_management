const School = require("../models/schoolModel");

// Initialize table
School.createTable();

// Add a new school
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: "All fields are required" });
  }

  School.addSchool(name, address, latitude, longitude, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error", details: err });
    res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
  });
};

// List schools sorted by distance
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (latitude == null || longitude == null) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

  School.getAllSchools((err, results) => {
    if (err) return res.status(500).json({ error: "Database error", details: err });

    results.forEach((school) => {
      const distance = Math.sqrt(
        Math.pow(school.latitude - latitude, 2) + Math.pow(school.longitude - longitude, 2)
      );
      school.distance = distance;
    });

    results.sort((a, b) => a.distance - b.distance);
    res.json(results);
  });
};
