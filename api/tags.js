const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();
  console.log(tags);
  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  const { tagname } = req.params;
  try {
    const allPosts = await getPostsByTagName;
    res.send({ posts: allPosts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
