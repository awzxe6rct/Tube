const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
  res.send('Video uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
