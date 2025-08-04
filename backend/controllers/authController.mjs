export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    res.status(201).json({ message: `User inregistrat cu username ${username} si rol ${role}` });
  } catch (err) {
    res.status(500).json({ message: 'Eroare la inregistrarea userului' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    res.status(200).json({ message: 'Login succces' });
  } catch (err) {
    res.status(500).json({ message: 'Eroare la loginul userului' });
  }
};
