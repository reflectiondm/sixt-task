import React from 'react';
import OffersContainer from './components/OffersContainer';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <div>Hello world!</div>
      <OffersContainer />
    </div>
  );
}
