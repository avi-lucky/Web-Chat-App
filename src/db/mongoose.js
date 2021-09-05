const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

// mongoose.set("useFindAndModify", false)
// mongoose.set("useUnifiedTopology", true)
// mongoose.set("useCreateIndex", true)
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
// console.log(process.env.DB_CONNECT);
})

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
  });
  
  mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
  });