const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/api/magic', (req, res) => {
  console.log(req.body);
  res.status(201).send('UID');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
