import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Blogpage from './pages/blogpage.jsx'
console.log('Running app.jsx')

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/blog",
    element: <Blogpage/>
  }
]);
import './index.css'

import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router = {router}/>)
console.log('App:', App)
  

export default App;