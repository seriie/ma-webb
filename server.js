const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const dataPath = path.join(__dirname, 'database/data.json');

// Middleware untuk mengizinkan akses ke file public
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { Name, Email, Text } = req.body;

  // Baca data yang sudah ada di data.json
  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).send('Internal Server Error');
    }

    let data = [];

    try {
      data = JSON.parse(jsonData); // Parse data yang sudah ada
    } catch (err) {
      console.error('Error parsing JSON data:', err);
    }

    // Tambahkan data baru
    const newEntry = {
        name: Name,
        email: Email,
        message: Text
    }

    data.push(newEntry);

    // Simpan kembali data ke data.json
    fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to JSON file:', err);
        return res.status(500).send('Internal Server Error');
      }

      console.log('Data has been saved to data.json');
      res.sendFile(path.join(__dirname, '/index.html'));
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});