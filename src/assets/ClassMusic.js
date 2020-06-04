const music = require("../models/MusicModel");
const { success, error } = require("./Functions");

class Music {
  static async getMusicByTitle(query) {
    try {
      const response = await music.find({
        title: { $regex: ".*" + query + ".*" },
      });
      if (0 in response) {
        return success(response);
      } else {
        return "No song";
      }
    } catch (err) {
      return error(err.message);
    }
  }

  static async getSomeSongs() {
    try {
      const response = await music.find().limit(10);
      if (0 in response) {
        return success(response);
      } else {
        return "No Songs registered";
      }
    } catch (err) {
      return error(err.message);
    }
  }

  static async getSongById(id) {
    try {
      const response = await music.findById(id);
      if (0 in response) {
        return success(response);
      } else {
        return "No Data";
      }
    } catch (err) {
      return error(err.message);
    }
  }

  static async addOneSong(body) {
    try {
      const isSong = await music.find(body);
      if (0 in isSong) {
        return "Song already exist";
      } else {
        const response = await music.create(body);
        return success(response);
      }
    } catch (err) {
      return error(err.message);
    }
  }

  static async updateSong(id, body) {
    try {
      const response = await music.findByIdAndUpdate(id, body);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }

  static async deleteSong(id) {
    try {
      const response = await music.findByIdAndRemove(id);
      return success(response);
    } catch (err) {
      return error(err.message);
    }
  }
}

module.exports = Music;
