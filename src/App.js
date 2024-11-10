import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Home } from '../temp/Pages/Home';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';




function App() {
  return (
    <div className="app site">
        <NavBar/>
        <main className="site-content" >
          <Home/>
        </main>
        <Footer />
    </div>
  );
}

export default App;
