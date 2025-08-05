export const getAllProfiles = (req, res) => {
  res.status(200).json({ message: 'get all users page' });
};

export const getProfile = (req, res) => {
  res.status(200).json({ message: `user with id: ${req.params.id}` });
};
