const { check } = require("express-validator");

const sanitizer = (action) => {
  switch (action) {
    case "id":
      return check("id").isMongoId().trim().escape();
    case "artist":
      return check("artist").isString().trim().escape();
    case "title":
      return check("title").isString().trim().escape();
    case "album":
      return check("album").isString().trim().escape();
    case "genre":
      return check("genre").isString();
    case "year":
      return check("year").isString().trim().escape();
    case "cover":
      return check("cover").isString().trim().escape();
    default:
      return;
  }
};

module.exports = sanitizer;
