const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); // Import module 'path'

const app = express();
const port = process.env.PORT || 3000; // Gunakan port yang diberikan oleh lingkungan atau 3000

// Middleware untuk mengizinkan akses ke file statis seperti CSS, JS, dan gambar
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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
