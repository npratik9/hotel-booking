require("dotenv").config()
const DBConfig = {
  mongodbUrl: process.env.MONGODB_CONNECTION_STRING,
};

module.exports = {
    DBConfig
}