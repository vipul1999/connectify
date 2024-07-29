const { Op } = require('sequelize'); // Import Op from Sequelize
const bcrypt = require('bcryptjs');
const User = require('../models/user');

/**
 * Create a new user.
 * @param {Object} userData - Data for creating a new user.
 * @returns {Promise<User>} - The created user.
 */
const createUser = async (userData) => {
  const { name, mobile_no, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  return User.create({
    name,
    mobile_no,
    email,
    password_hash: hashedPassword,
  });
};

/**
 * Update an existing user by ID.
 * @param {number} id - The ID of the user to update.
 * @param {Object} updateData - Data to update the user.
 * @returns {Promise<User>} - The updated user.
 */
const updateUser = async (id, updateData) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  console.log(updateData.password);
  
  if (updateData.password) {
    updateData.password_hash = await bcrypt.hash(updateData.password, 10);
  }
  
  return user.update(updateData);
};

/**
 * Delete a user by ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<void>}
 */
const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  
  return user.destroy();
};

/**
 * List all users.
 * @returns {Promise<User[]>} - List of users.
 */
const listUsers = async () => {
  return User.findAll();
};

/**
 * Search users by name.
 * @param {string} name - The name to search for.
 * @returns {Promise<User[]>} - List of users matching the search criteria.
 */
const searchUserByName = async (name) => {
  return User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  listUsers,
  searchUserByName,
};
