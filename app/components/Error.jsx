import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/constants';

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.sixtBlack};
  font-size: 46px;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }
`;

const SubTitle = styled.span`

`;

export default function Error() {
  return (
    <ErrorWrapper>
      <Title>Oops.</Title>
      <SubTitle>Etwas ist schief gelaufen <nobr>:(</nobr> <br/>Versuchen Sie die Seite später erneut zu laden</SubTitle>
    </ErrorWrapper>
  );
}
