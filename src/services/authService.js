const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const validatePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const registerUser = async (username, password) => {
  const hashedPassword = await hashPassword(password);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return generateToken(user._id);
};

const authenticateUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await validatePassword(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  return generateToken(user._id);
};

module.exports = {
  registerUser,
  authenticateUser
};
