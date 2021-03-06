const express = require("express");
const app = express();
const cors = require("cors");

//Import route files
const apiJokenpo = require("./routes/jokenpoRoutes");

//Data parsers for the request body
app.use(express.json());
app.use(cors());

//Define the route files here
app.use("/getResultGame", apiJokenpo);

//Starts the application server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server running at: http://localhost:" + port);
});


