const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.listUsers);
router.get('/users/search', userController.searchUserByName);

module.exports = router;