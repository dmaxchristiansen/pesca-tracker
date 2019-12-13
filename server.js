//Imports
const express = require("express");
const path = require("path");
const app = express();

//Config
app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    express.static(__dirname + "/public/dist/public")
  );

//Database
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

app.all("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "/public/dist/public/index.html"))
);

//Port
app.listen(8000, () => console.log("Listening on part: 8000"));