const { Op } = require('sequelize');
const Post = require('../models/post'); // Adjust the path to your Post model
const Tag = require('../models/tag'); // Adjust the path to your Tag model
const PostTag = require('../models/postTag'); // Adjust the path to your PostTag model

const createPost = async (postData) => {
  try {
    return await Post.create(postData);
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

const createPostWithTags = async (postData) => {
    const { tags, ...postAttributes } = postData;
  
    try {
      // Create the post
      const post = await Post.create(postAttributes);
      console.log(tags);
      // Handle tags
      if (tags && tags.length > 0) {
        const tagPromises = tags.map(async (tagName) => {
          // Find or create the tag
          const [tag] = await Tag.findOrCreate({
            where: { name: tagName },
          });
  
          // Map the tag to the post
          await PostTag.create({
            post_id: post.id,
            tag_id: tag.id,
          });
        });
  
        // Wait for all tag operations to complete
        await Promise.all(tagPromises);
      }
  
      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };
  

const updatePost = async (postId, postData) => {
  try {
    return await Post.update(postData, {
      where: { id: postId },
    });
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    return await Post.destroy({
      where: { id: postId },
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

const getPostsByTag = async (tag) => {
  try {
    return await Post.findAll({
      where: {
        text: {
          [Op.iLike]: `%${tag}%`,
        },
      },
    });
  } catch (error) {
    console.error('Error getting posts by tag:', error);
    throw error;
  }
};

const getPostsByText = async (text) => {
  try {
    return await Post.findAll({
      where: {
        text: {
          [Op.iLike]: `%${text}%`,
        },
      },
    });
  } catch (error) {
    console.error('Error getting posts by text:', error);
    throw error;
  }
};

module.exports = {
  createPost,
  createPostWithTags,
  updatePost,
  deletePost,
  getPostsByTag,
  getPostsByText,
};
