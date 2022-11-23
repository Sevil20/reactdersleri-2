import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Wine from './Components/Wine/Wine'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Wine
    title = ' New Wine'
    description = 'red'
    rating = '1'/>
  </div>
)
export default App
