const express = require("express");
const router = express.Router(); 
const { Posts } = require("../models"); 

router.get("/" , (req, res) => {
  res.send("Hello world!");
}); 

router.post("/" , async (req,res) => {
  const post = req.body 
  await Posts.create(post); 
  res.json(post); 
})

module.exports = router;
