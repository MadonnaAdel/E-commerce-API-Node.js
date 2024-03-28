const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/users");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/", auth, userController.updateUser);
router.delete("/", auth, userController.deleteUser);

module.exports = router;
