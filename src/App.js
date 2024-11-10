import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App Site">
        <NavBar />
        <main className="site-content" >
          <Home/>
        </main>
        <Footer />
    </div>
  );
}

export default App;
