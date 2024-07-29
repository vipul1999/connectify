const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); // Adjust the path to your postController

router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);
router.get('/posts/tag', postController.getPostsByTag);
router.get('/posts/text', postController.getPostsByText);

module.exports = router;
