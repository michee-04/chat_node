/** @format */

const getUserDetailsFromToken = require("../helpers/getUserDetailFromToken")
const UserModel = require("../models/userModels")

async function updateUser(req, res) {
  try {
    const token = res.cookies.token || ""

    const user = await getUserDetailsFromToken(token)

    const { name, profile_pic } = req.body

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    )
    const userInformation = await UserModel.findById(user._id)
    return res.json({
      message: "user update",
      data: userInformation,
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || ErrorEvent,
      error: true,
    })
  }
}

module.exports = updateUser
