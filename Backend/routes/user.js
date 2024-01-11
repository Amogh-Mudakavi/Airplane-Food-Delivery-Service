const express = require("express");
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(cors());

const {login , signup} = require("../controllers/Auth");

router.post("/login" , login);
router.post("/signup" , signup);

module.exports = router;