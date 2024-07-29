const postService = require('../services/postService'); // Adjust the path to your postService

const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const post = await postService.createPostWithTags(postData);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = req.body;
    await postService.updatePost(postId, postData);
    res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await postService.deletePost(postId);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostsByTag = async (req, res) => {
  try {
    const tag = req.query.tag;
    if (!tag) {
      return res.status(400).json({ message: 'Tag query parameter is required' });
    }
    const posts = await postService.getPostsByTag(tag);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostsByText = async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ message: 'Text query parameter is required' });
    }
    const posts = await postService.getPostsByText(text);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostsByTag,
  getPostsByText,
};
