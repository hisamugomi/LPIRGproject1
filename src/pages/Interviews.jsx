import React from "react";
import { useState, useEffect } from "react";
import videoData from "../db.json";
import Navbar from "../components/Navbar";
import '../components/app.css';

function Blogpage() {
  return (
    <div>
      <Navbar />
      <h1>Interviews</h1>
      <Timeline />
    </div>
  );
}

const Timeline = () => {

  const [videos, setVideos] = useState(videoData);
  console.log('fetching data')
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      // .then((response) => response.text())
      // .then(text => console.log(text))
      .then((data) => {
        setVideos(data)
      })
      // .catch((error) => { console.error('Error:', error) }) 
  })
console.log('videos:', videos)

  return (
    <div>
      {/* <video src={videos.videoUrl} controls width="100%"/> */}
        {videos.map(video => (
          <div key={video.id}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <video controls width="100%">
                <source src={video.videoUrl1} type="video/mp4" />
                Your browser does not support the video tag
              </video>
              <video controls width="100%">
                <source src={video.videoUrl2} type="video/mp4" />
                Your browser does not support the video tag
              </video>

<div>{video.id}{video.videoUrl1}</div>

            </div>
        ))}
      </div>
  );
};


export default Blogpage;