/** @format */

const mongoose = require("mongoose")

const conversationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: User,
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: User,
    },
    message: [
      {
        type: mongoose.Schema.ObjectId,
        ref: message,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const conversationModel = mongoose.model("conversation", conversationSchema)

module.exports = conversationModel
