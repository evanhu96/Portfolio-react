import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Quarters from "./components/Quarters";
import Selfie from "./components/Selfie";
import { Stack } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
