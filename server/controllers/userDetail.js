/** @format */

const getUserDetailsFromToken = require("../helpers/getUserDetailFromToken")
async function userDetail(req, res) {
  try {
    const token = req.cookies.token || ""

    const user = await getUserDetailsFromToken(token)

    return user
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    })
  }
}

module.exports = userDetail
