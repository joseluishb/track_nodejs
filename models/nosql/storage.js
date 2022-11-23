const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },  
    filename: {
      type: String,
      unique: true,
    }
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageScheme);
