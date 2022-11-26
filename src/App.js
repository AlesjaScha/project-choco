import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Contact';
import Gifts from './Gifts';
import AboutUs from './AboutUs';
import Chocolate from './Chocolate';


function App() {
  return( 
      
    
  <Router>

  <nav>
     <Link to="/"className='link'>Shop</Link>
    <Link to ="/contact"className="link">Kontakt</Link>
    <Link to ="/aboutUs"className="link">Über uns</Link>
    <Link to ="/gifts"className="link">Geschenke</Link>
  </nav>

  <Routes>
     <Route path='/'element={<Chocolate/>}/>
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/aboutUs"element={<AboutUs/>}/>
    <Route path="/gifts"element={<Gifts/>}/>
      
  </Routes>

  </Router>  

  )
 

}

export default App;

