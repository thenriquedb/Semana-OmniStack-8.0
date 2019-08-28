// const mongoose = require("mongoose"); ou
const { Schema, model } = require("mongoose");

const devScheama = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    // Cria coluna 'criado em' e 'atulizado em'
    timestamps: true
  }
);

module.exports = model("Dev", devScheama);
