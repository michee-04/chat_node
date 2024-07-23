/** @format */

const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./server/config/connectDB")
const router = require("./server/routes")

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.json({
    message: `Server cool ${port}`,
  })
})
app.use(express.json())
app.use("/api", router)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server running ${port}`)
  })
})
