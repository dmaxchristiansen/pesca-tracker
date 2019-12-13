const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0)
		require(models_path+"/"+file);
});

mongoose
  .connect("mongodb://localhost/carsApp", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to the mongodb...."))
  .catch(reason => console.log("Something went wrong for some....", reason));