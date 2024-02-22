const express = require("express");

const ctrl = require("../../controllers/statistics");

const router = express.Router();

router.get("/", ctrl.getUpdateStatistic);

module.exports = router;
