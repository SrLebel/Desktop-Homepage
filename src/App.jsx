import './App.css'
import Clock from './module/time'
import Data from './module/data'
import Weather from './module/weather'


function App() {
  return (
    <>
      <Weather/>
      <h1> Welcome!</h1>
      <Clock/>
      <Data/>
    </>
  )
}

export default App
