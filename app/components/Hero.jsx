import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../styles/constants';

const HeroWrapper = styled.div`
  background: ${colors.sixtOrange};
  height: 150px;
  padding-left: 46px;

  @media screen and (min-width: ${media.tablet}) {
    padding-left: 72px;
  }
`;

const Title = styled.h1`
  color: ${colors.sixtBlack};
  font-size: 46px;
  text-transform: uppercase;
  margin: 0;

  @media screen and (min-width: ${media.tablet}) {
    font-size: 72px;
  }
`;

const SubTitle = styled.span`
  color: ${colors.sixtBlack};
  font-size: 20px;
  margin: 0;
`;

const Accent = styled.span`
  color: ${colors.sixtOrange};
  background-color: ${colors.sixtBlack};
  margin: 0;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <Title>sixt <Accent>test</Accent> task</Title>
      <SubTitle>We got it sorted</SubTitle>
    </HeroWrapper>
  );
}
