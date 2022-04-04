const express = require('express');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const apiRoutes = require('./src/modules/routes/routes');
const errorMiddleware = require('./src/modules/middlewares/error-middleware')
const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials:true,
  origin: process.env.CLIENT_URL
}));
app.use(errorMiddleware)
const PORT = process.env.PORT || 8000
app.use('/', apiRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e)
  }
}
start()

