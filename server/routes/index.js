/** @format */

const express = require("express")
const registerUser = require("../controllers/registerUser")
const checkEmail = require("../controllers/checkEmail")
const checkPassword = require("../controllers/checkPassword")
const userDetail = require("../controllers/userDetail")
const logout = require("../controllers/logout")
const updateUser = require("../controllers/updateUser")

const router = express.Router()

router.post("/auth/register", registerUser)
router.post("/email", checkEmail)
router.post("/password", checkPassword)
router.get("/user-details", userDetail)
router.post("/logout", logout)
router.post("/update-user", updateUser)

module.exports = router
