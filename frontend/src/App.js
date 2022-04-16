
import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import './App.css';
import eBajarLogo from './assets/images/icon/eBajarLogo.png';
import './bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import HomeScreen from "./containers/HomeScreen/HomeScreen";

const App = () => {
  useEffect(() => {
    getTitle()
  }, [])
  const getTitle = () => {
    const titleLogo = document.getElementById('favicon');
    titleLogo.setAttribute('href', eBajarLogo)
    document.querySelector('title').innerHTML = "E-Bajar"
  }
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
