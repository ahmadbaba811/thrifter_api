const router = require('express').Router();
const { GetAllRatings } = require("../controllers/schemes")


router.get('/all-schemes', async (req, res) => {
    GetAllRatings().then((data) => {
        res.json(data)
    })
})


module.exports = router;