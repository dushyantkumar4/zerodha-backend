const { Signup,Login } = require("../controller/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();


router.post("/signup", Signup);
router.post("/login",Login);
router.post("/",userVerification);

module.exports = router;