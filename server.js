const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const app = express();

// Middleware untuk mengizinkan akses ke file public
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  const { Name, Email, Text } = req.body;

  fs.readFile(config.DATA_PATH, 'utf8', (err, jsonData) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).send('Internal Server Error');
    }

    let data = [];

    try {
      data = JSON.parse(jsonData);
    } catch (err) {
      console.error('Error parsing JSON data:', err);
    }

    const Id = data.length + 1;

    const newEntry = {
      id: Id,
      name: Name,
      email: Email,
      message: Text
    };

    data.push(newEntry);

    fs.writeFile(config.DATA_PATH, JSON.stringify(data, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to JSON file:', err);
        return res.status(500).send('Internal Server Error');
      }

      console.log('Data has been saved to data.json');
      res.sendFile(path.join(__dirname, 'index.html'));
      console.log('Saved data:', newEntry);
    });
  });
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'not_found.html'));
});

app.listen(config.PORT, () => {
  console.log(`Server running at ${config.PROTOCOL}${config.DOMAIN}${config.PORT}`);
});
