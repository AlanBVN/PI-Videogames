const { Router } = require("express");
const axios = require("axios").default;

const router = Router();

router.get("/", (req, res) => {
  res.json("genres");
});

module.exports = router;
