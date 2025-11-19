module.exports = (roles = []) => (req,res,next) => {
  if(!req.user) return res.status(401).json({message:'unauth'});
  if(!roles.length) return next();
  if(!roles.includes(req.user.role)) return res.status(403).json({message:'forbidden'});
  next();
};
