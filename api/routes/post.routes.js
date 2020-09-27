const { response } = require("express");
const express = require("express");
const Post = require("../../model/postModel");
const Router = express.Router();

const post = require("../../model/postModel");

Router.route("/").get((req, res) => {
  Post.find()
    .then((response) => res.status(200).json({ response, success: true }))
    .catch((error) => res.status(400).json({ error, success: false }));
});

Router.route("/add").post((req, res) => {
  const { author, content } = req.body;

  const newPost = new Post({
    content,
    author,
  });

  newPost
    .save()
    .then((response) => res.status(200).json({ response, success: true }))
    .catch((error) => res.status(400).json({ error, success: false }));
});

//finding post
Router.route("/:id").get((req, res) => {
  const idSearch = req.params.id;
  Post.findById(idSearch)
    .then((response) => res.status(200).json({ response, success: true }))
    .catch((error) => res.status(400).json({ error, success: false }));
});

//update

Router.route("/update/:id").post((req, res) => {
  const idSearch = req.params.id;
  Post.findById(idSearch)
    .then((post) => {
      const { author, content } = req.body;
      post.author = author;
      post.content = content;
      post
        .save()
        .then((response) => res.status(200).json({ response, success: true }))
        .catch((error) => res.status(400).json({ error, success: false }));
    })
    .catch((error) => res.status(400).json({ error, success: false }));
});

//deleting

Router.route("/delete/:id").delete((req, res) => {
  const idSearch = req.params.id;
  Post.findByIdAndDelete(idSearch)
    .then((response) => res.status(200).json({ response, success: true }))
    .catch((error) => res.status(400).json({ error, success: false }));
});

module.exports = Router;
