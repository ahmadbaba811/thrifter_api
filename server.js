const express = require('express')
const path = require("path");
const { db } = require("./src/models/db")
const cors = require('cors')
const app = express();



app.use(cors());
app.use("/", express.static(path.join("../public")));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/schemes", require("./src/routes/schemes"));
app.use("/users", require("./src/routes/users"));



const StartServer = async () => {
  try {
    await db.sync({ force: false });
    console.log("databse is ready");
    app.listen(3002, (err) => {
      if (!err) {
        console.log("app is running on localhost 3002")
      } else {
        console.log(err)
      }
    })
  } catch (e) {
    console.log("unable to connect")
  }
}

StartServer();