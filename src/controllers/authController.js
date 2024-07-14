const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.registerUser(username, password);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.authenticateUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login
};
