import { useEffect, useState } from 'react'
import './App.css'
import videoData from '../db.json'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Navbar from './Navbar'


console.log('Running app.jsx')


function App() {
  // Landing page
  // history of LPIRG
  // recruitment information
  // LPIRG interviews
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <IntroductiontoLPIRG />
      </div>
    </>
  )
}

const IntroductiontoLPIRG = () => {
  return (
    <div>
      <h2>Welcome to the LPIRG archive</h2>
      <p>Welcome, please get to know about LPIRG, and its History</p>
      <HistoryofLPIRG />
    </div>
  )
}

const HistoryofLPIRG = () => {
  return (
    <div>
      <h2>History of LPIRG</h2>
      <p>LPIRG was founded in 2003 by a group of students who wanted to make a difference in the community. Since then, LPIRG has been working to promote social and environmental justice through research, education, and action. Our projects have ranged from community-based research on local food systems to campaigns on climate change and social inequality. We are committed to creating a more just and sustainable world for all.</p>
      <Timeline />
      <Timelines />
    </div>
  )
}

const timelineData = [
  { year: "2005", event: "LPIRG founded at the University of Lethbridge." },
  { year: "2010", event: "Expanded funding opportunities for student projects." },
  { year: "2015", event: "Launched community engagement initiatives." },
  { year: "2020", event: "Digitized records and archives." },
  { year: "2024", event: "Created an online history archive." }
];

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
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>
        ))}
      </div>
  );
};


const Timelines = () => {
  return (
    <div className="timeline">
      <div className="container left">
        <div className="content">
          <h2>Event 1</h2>
          <p>This is the description for the first event.</p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>Event 2</h2>
          <p>This is the description for the second event.</p>
        </div>
      </div>

      <div className="container left">
        <div className="content">
          <h2>Event 3</h2>
          <p>This is the description for the third event.</p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>Event 4</h2>
          <p>This is the description for the fourth event.</p>
        </div>
      </div>
    </div>
  );
};


export default App
