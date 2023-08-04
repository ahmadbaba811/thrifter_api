const router = require('express').Router();
const { createUser } = require("../controllers/users")

router.get('/create-user', async (req, res) => {
    console.log(req.body)
    createUser(req.body).then((data) => {
        console.log(data)
        res.json(data)
    })
})


module.exports = router;