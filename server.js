const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const vocab = require('./routes/vocab');

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use((res) => res.header("Access-Control-Allow-Origin", "*"));

const PORT = process.env.PORT || 3000;

// * Use routes
app.use('/api', vocab);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});