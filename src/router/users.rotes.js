const {Router} = require("express");
const {registr} = require("../controlers/user");
const {change} = require("../controlers/change")

const router = Router();

router.post("/create", registr);
router.post("/change", change)

module.exports = router;