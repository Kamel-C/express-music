const music = require("../models/MusicModel");
const { success, error } = require("./Functions");

class Music {
  static async getMusicByTitle(query) {
    try {
      const response = await music.find({
        title: { $regex: ".*" + query + ".*" },
      });
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async getSomeSongs() {
    try {
      const response = await music.find().limit(10);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async getSongById(id) {
    try {
      const response = music.findById(id);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async addOneSong(body) {
    try {
      const response = music.create(body);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async updateSong(id, body) {
    try {
      const response = music.findByIdAndUpdate(id, body);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async deleteSong(id) {
    try {
      const response = music.findByIdAndRemove(id);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }
}

module.exports = Music;
