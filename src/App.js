import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { getMediumArticles } from './mediumArticles';




function App() {
  getMediumArticles().then(console.log)
  return (
    <div className="App Site">
        <NavBar />
        <main className="Site-content" >
          <Home/>
        </main>
        <Footer />
    </div>
  );
}

export default App;
