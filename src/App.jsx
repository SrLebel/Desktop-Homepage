import './App.css'
import Clock from './module/time'
import Data from './module/data'
import Weather from './module/weather'
import Pokemon from './module/pokemon'


function App() {
  return (
    <>
      <Weather/>
      <Pokemon/>
      <h1> Welcome!</h1>
      <Clock/>
      <Data/>
    </>
  )
}

export default App
