const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = Promise;

const MONGO_PASS = "rfrHmNV6Qhn6eD79";
const MONGO_URI = `mongodb://damien:${MONGO_PASS}@restapi-shard-00-00-zglys.mongodb.net:27017,restapi-shard-00-01-zglys.mongodb.net:27017,restapi-shard-00-02-zglys.mongodb.net:27017/test?ssl=true&replicaSet=RESTapi-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    keepAlive: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.warn("DB connection failed!");
  });

module.exports.User = require("./user");
