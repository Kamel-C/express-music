const { validationResult } = require("express-validator");
const fs = require("fs");

exports.success = (data) => {
  return { status: "success", data };
};

exports.error = (msg) => {
  return { status: "error", msg };
};

exports.repportError = async (msg) => {
  await fs.appendFile("../../errorsLog.txt", `${Date.now()}: ${msg}. \n`);
};

isErr = (err) => {
  return err instanceof Error;
};

exports.checkResStatus = (obj) => {
  if (this.isErr(obj)) return this.error(obj);
  else return this.success(obj);
};

exports.checkReqStatus = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return true;
  else return false;
};
