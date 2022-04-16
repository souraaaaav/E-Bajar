import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import './App.css';
import eBajarLogo from './assets/images/icon/eBajarLogo.png';
import './bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import ProductScreen from "./containers/ProductScreen/ProductScreen";

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
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
