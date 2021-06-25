const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const routes = require('./routes');

const PORT = 4000;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.listen(PORT, () => {
  console.log('server started')
});
