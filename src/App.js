import React from 'react';
import { Container } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Container bg="blue">
        <NavBar />
        <Home/>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
