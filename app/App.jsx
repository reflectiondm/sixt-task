import React from 'react';
import OffersContainer from './components/OffersContainer';
import GlobalStyle from './styles/GlobalStyle';
import Hero from './components/Hero';
import Footer from './components/Footer';
import styled from 'styled-components';

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function App() {
  return (
    <Page>
      <GlobalStyle />
      <Hero />
      <OffersContainer />
      <Footer />
    </Page>
  );
}
