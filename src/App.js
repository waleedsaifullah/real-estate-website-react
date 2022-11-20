import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contact from './pages/Contact';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
