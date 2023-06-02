const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.get("/", (req, res, next) => {
  res.render("sign-up-form");
});

router.post("/", async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ error: "That username already exists" });
    }
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
        res.render("index");
      }
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      const result = await user.save();
    });

    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;