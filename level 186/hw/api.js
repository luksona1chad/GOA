const express = require("express");
const router = express.Router();

const { getApi } = require("../controllers/api.controllers");

router.post("/1", getApi);

module.exports = router;