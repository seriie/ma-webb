const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware untuk mengizinkan akses ke file CSS
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const { Name, Email, Text } = req.body;
  const data = `\n\nName: ${Name}\nEmail: ${Email}\nMessage: ${Text}`;

  // Simpan data ke file output.txt
  fs.appendFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log('Data has been saved to output.txt');
  });

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});