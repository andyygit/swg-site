export const getAllUsers = (req, res) => {
  res.status(200).json({ message: 'get all users page' });
};

export const getUser = (req, res) => {
  res.status(200).json({ message: `user with id: ${req.params.id}` });
};

export const createUser = (req, res) => {
  res.status(201).json({ message: 'user created successfully' });
};

export const updateUser = (req, res) => {
  res.status(200).json({ message: 'user updated successfully' });
};

export const deleteUser = (req, res) => {
  res.status(200).json({ message: 'user deleted successfully' });
};
