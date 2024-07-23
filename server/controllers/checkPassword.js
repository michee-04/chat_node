/** @format */

const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModels")
const bcryptjs = require("bcryptjs")

async function checkPassword(req, res) {
  try {
    const { password, userId } = req.body

    const user = await UserModel.findById(userId)

    const verifyPassword = await bcryptjs.compare(password, user.password)

    if (!verifyPassword) {
      return res.status(401).json({
        message: "password incorrect",
        error: true,
      })
    }
    const tokenData = {
      id: user.id,
      email: user.email,
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    })

    const cookieoptions = {
      http: true,
      secure: true,
    }

    return res.cookie("token", token, cookieoptions).status(200).json({
      mesage: "Login successful",
      success: true,
      token: token,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    })
  }
}

module.exports = checkPassword