export const uploadImage = (req, res) => {
  res.status(202).json({ message: 'image uploaded successfully' });
};

export const deleteImage = (req, res) => {
  res.status(200).json({ message: 'image deleted successfully' });
};
