const router = require("express").Router();
const jokenpoController = require('../controllers/jokenpoController')

router.get('/', async function (req, res) {
    try {
        var returnMessage = await jokenpoController.getResult(req.query);
        res.status(200).send(returnMessage);
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }

});

module.exports = router;