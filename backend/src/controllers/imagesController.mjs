export const uploadImage = (req, res) => {
  // res.status(202).json({ message: 'image uploaded successfully' });
  res.status(202).json({ message: req.file });
};

export const deleteImage = (req, res) => {
  res.status(200).json({ message: 'image deleted successfully' });
};
