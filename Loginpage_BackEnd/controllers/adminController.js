const bcrypt = require('bcrypt');

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== process.env.DEFAULT_ADMIN_EMAIL) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, process.env.DEFAULT_ADMIN_PASSWORD_HASH);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.json({ message: 'Admin sign-in successful' });
  } catch (error) {
    console.error('Error during sign-in:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};