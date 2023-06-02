const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get("/", (req, res) => res.render("index", { user: req.user}));

router.post("/log-in", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
}))

module.exports = router