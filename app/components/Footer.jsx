import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/constants';
import linkedIn from '../images/linkedin-social-logo.svg';
import github from '../images/github-sign.svg';

const FooterContainer = styled.div`
  background: ${colors.sixtBlack};
  color: ${colors.pureWhite};
  height: 70px;
  padding: 5px;
  display: grid;
  grid-template: "copyright linkedin github ." 40px
                 "disclaymer disclaymer disclaymer disclaymer" 20px /
                 auto 50px 50px 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`;

const LinkedIn = styled.a`
  grid-area: linkedin;
`;

const GitHub = styled.a`
  grid-area: github;
`;

const SocialLinkImage = styled.img`
  width: 40px;
  height: 40px;
`;

const CopyrightText = styled.span`
  grid-area: copyright;
`;

const Disclaymer = styled.div`
  grid-area: disclaymer;
  font-size: 10px;
  justify-self: start;

  a {
    color: ${colors.sixtOrange};
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <CopyrightText>Copyright © 2019 - Andrei Zubov</CopyrightText>
      <LinkedIn href="http://www.linkedin.com/in/andreizubov">
        <SocialLinkImage src={linkedIn} />
      </LinkedIn>
      <GitHub href="http://www.github.com/reflectiondm">
        <SocialLinkImage src={github} />
      </GitHub>
      <Disclaymer>
        Icons made by <a href="https://www.flaticon.com/authors/vectorgraphit" title="Vectorgraphit">Vectorgraphit</a> and <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="blank">CC 3.0 BY</a>
      </Disclaymer>
    </FooterContainer>
  );
}
