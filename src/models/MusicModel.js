const mongoose = require("mongoose");

const MusicModel = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    default: "unknown",
  },
  genre: {
    type: Array,
    default: "unknown",
  },
  year: {
    type: String,
    default: "No date",
  },
  cover: {
    type: String,
    default: "No image",
  },
  adding_date: {
    type: Date,
    default: Date.now(),
  },
});

const music = mongoose.model("Music", MusicModel);
module.exports = music;
