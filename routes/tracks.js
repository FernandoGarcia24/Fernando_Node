
const express = require("express");
const router = express.Router();
const {getItems, getItem} = require ("../controllers/tracks");

// Todo http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems)
router.get("/:id", getItem)

module.exports = router