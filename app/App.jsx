import React from 'react';
import OffersContainer from './components/OffersContainer';
import GlobalStyle from './styles/GlobalStyle';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <OffersContainer />
      <Footer />
    </div>
  );
}
