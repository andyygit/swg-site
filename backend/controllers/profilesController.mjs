export const getRandomProfiles = (req, res) => {
  res.status(200).json({ message: 'get random 20 users on home page' });
};

export const getProfile = (req, res) => {
  res.status(200).json({ message: `user with id: ${req.params.id}` });
};
