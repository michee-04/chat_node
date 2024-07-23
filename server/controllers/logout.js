/** @format */

async function logout(req, res) {
  try {
    const cookieOPtions = {
      http: true,
      secure: true,
    }

    return res.cookie("token", cookieOPtions).status(200).json({
      message: "logout successful",
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    })
  }
}


module.exports = logout