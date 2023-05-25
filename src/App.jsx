import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WeatherBox from "./components/WeatherBox";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<WeatherBox apiKey = {apiKey}/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
