import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [videos, setVideos] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadVideo = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('video', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchVideos();
    } catch (error) {
      console.error('Error uploading video', error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos', error);
    }
  };

  return (
    <div>
      <h1>Video Sharing App</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={uploadVideo}>Upload Video</button>
      <div>
        {videos.map((video) => (
          <div key={video.url}>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
