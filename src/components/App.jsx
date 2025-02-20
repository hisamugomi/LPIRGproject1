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
    <div className='div-introtolpirg'>
      <h2 className='head-introtolpirg'>Welcome to the LPIRG archive</h2>
      <p>Welcome, please get to know about LPIRG, and its History</p>
    </div>
      <HistoryofLPIRG />
    </div>
  )
}

const HistoryofLPIRG = () => {
  return (
    <div className='div-histoflpirg'>
      <h2>History of LPIRG</h2>
      <p>LPIRG was founded in 2003 by a group of students who wanted to make a difference in the community. Since then, LPIRG has been working to promote social and environmental justice through research, education, and action. Our projects have ranged from community-based research on local food systems to campaigns on climate change and social inequality. We are committed to creating a more just and sustainable world for all.</p>
      <Timelines />
    </div>
  )
}

const timelineData = [
  { year: "2003", event: "LPIRG founded at the University of Lethbridge." },
  { year: "2007", event: "started cinema politica" },
  { year: "2010", event: "student action collective started" },
  { year: "2020", event: "Started the fresh food box." },
  { year: "2024", event: "Started doing the fresh food box in the university." }
];



const Timelines = () => {
  return (
    <div className="timeline">
      <div className="timelinebar"></div>
      <div className="timelinebar2"></div>
      {timelineData.map((item, index) => (
        <div key={index} className={`container ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="content">
            <h2>{item.year}</h2>
            <p>{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default App
