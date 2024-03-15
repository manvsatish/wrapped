const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simulated database
const users = {};

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (users[username]) {
    return res.status(409).json({ error: 'User already exists.' });
  }

  // Other validations go here (e.g., password length, email format if necessary)

  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = { email, password: hashedPassword };
  res.status(201).json({ message: 'User registered successfully.' });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user) {
    return res.status(404).json({ error: 'User does not exist.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  res.status(200).json({ message: 'User logged in successfully.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
