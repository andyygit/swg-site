export const genImgName = (req, res, next) => {
  req.imgNamePrefix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  next();
};
