const express = require("express");
const MusicRouter = express.Router();
const music = require("../assets/ClassMusic");
const { checkReqStatus } = require("../assets/Functions");
const sanitizer = require("../assets/SanitizeReducer");
const errorResp = "Data not sanitized.";

MusicRouter.get("/songs", async (req, res) => {
  const resp = await music.getSomeSongs();
  res.json(resp);
});

MusicRouter.get("/search", [sanitizer("title")], async (req, res) => {
  if (checkReqStatus(req)) return errorResp;
  const resp = await music.getMusicByTitle(req.query.title);
  res.json(resp);
});

MusicRouter.get("/", [sanitizer("id")], async (req, res) => {
  if (checkReqStatus(req)) return errorResp;
  const resp = await music.getSongById(req.params.id);
  res.json(resp);
});

MusicRouter.post(
  "/",
  [
    sanitizer("artist"),
    sanitizer("title"),
    sanitizer("album"),
    sanitizer("genre"),
    sanitizer("year"),
    sanitizer("cover"),
  ],
  async (req, res) => {
    if (checkReqStatus(req)) return errorResp;
    const resp = await music.addOneSong(body);
    res.json(resp);
  }
);

MusicRouter.put(
  "/:id",
  [
    sanitizer("artist"),
    sanitizer("title"),
    sanitizer("album"),
    sanitizer("genre"),
    sanitizer("year"),
    sanitizer("cover"),
  ],
  async (req, res) => {
    if (checkReqStatus(req)) return errorResp;
    const resp = await music.updateSong(body);
    res.json(resp);
  }
);

MusicRouter.get("*", async (req, res) => {
  await res.json("This url doesn't exist.");
});

module.exports = MusicRouter;
