import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Clock from './module/time'
import Data from './module/data'
import Weather from './module/weather'
import Pokemon from './module/pokemon'
import SearchBar from './module/searchbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Weather/>
      <Pokemon/>
      <h1> Welcome!</h1>
      <Clock/>
      <Data/>
      <SearchBar/>
  </React.StrictMode>,
)
