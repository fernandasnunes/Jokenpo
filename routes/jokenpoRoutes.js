const rootRoutes = require("express").Router();
const jokenpoController = require("../controllers/jokenpoController");

rootRoutes.get("/", function (req, res) {
  try {
    var returnMessage = jokenpoController.gameResult(req.query);
    res.status(200).send(returnMessage);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = rootRoutes;
