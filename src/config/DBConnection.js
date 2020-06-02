const mongoose = require("mongoose");
const path = "mongodb://localhost:27017/myDatabase";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(path, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${conn.connection.host}!!!`);
  } catch (err) {
    console.log(`DATABASE CONNECTION ERROR:: ${err.message}`);
  }
};

module.exports = dbConnection;