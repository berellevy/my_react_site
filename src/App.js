import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Home/>
        <Footer />
    </div>
  );
}

export default App;