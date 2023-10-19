const express = require('express');
const cors = require('cors');
const { default: mongoose } = require( 'mongoose' );
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { hashSync } = require('bcryptjs');
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5173',
}));
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
  res.json('test ok')})

  app.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    try{
    const userDoc = await User.create({
      name,
      email, 
      password: hashSync(password, bcryptSalt)
}, { maxTimeMS: 30000 }); // Increase time
    res.json(userDoc)
  } catch (e) {
    res.status(422).json({e})
  }
  })

  app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if (userDoc){

      const passOk = bcrypt.compareSync(password, userDoc.password)
      if(passOk) {
        res.json({message: 'pass ok'})
      }
    } else {
      res.status(422).json({message: 'pass not ok'})
    }
  })



  app.listen(4000)