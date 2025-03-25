const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

router.post("/add", schoolController.addSchool);
router.get("/list", schoolController.listSchools);

module.exports = router;
