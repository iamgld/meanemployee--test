const mongoose = require("mongoose");

const url =
  "mongodb+srv://gregor:tnc5jeAPAL5HRHXV@cluster0-fcyyr.mongodb.net/meanemployee?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
