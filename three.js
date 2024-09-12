const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  uploader: String,
  uploadDate: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', videoSchema);
