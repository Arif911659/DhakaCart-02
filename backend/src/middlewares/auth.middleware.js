const jwt = require('jsonwebtoken');
const { User } = require('../models');

const auth = async (req,res,next) => {
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({ message: 'No token' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(payload.id);
    next();
  } catch(e) { return res.status(401).json({ message: 'Invalid token' }); }
};

module.exports = auth;
