const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const CookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { hashSync } = require('bcryptjs');
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'secret';
app.use(express.json());
app.use(CookieParser());
app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create(
      {
        name,
        email,
        password: hashSync(password, bcryptSalt),
      },
      { maxTimeMS: 30000 }
    ); // Increase time
    res.json(userDoc);
  } catch (e) {
    res.status(422).json({ e });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res.cookie('token', token).json(userDoc);
        }
      );
    }
  } else {
    res.status(422).json({ message: 'pass not ok' });
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        throw err;
      }
      try {
        const userDoc = await User.findById(userData.id);
        res.json(userDoc);
      } catch (error) {
        console.log(error);
      }
    });
  } else {
    res.json(null);
  }
});

app.listen(4000);
