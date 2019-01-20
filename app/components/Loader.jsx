import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/constants';

const LoadingIndicator = styled.div`
:before,
:after {
  background: ${colors.sixtOrange};
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
  background: ${colors.sixtOrange};
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: ${colors.sixtOrange};
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

:before,
:after {
  position: absolute;
  top: 0;
  content: '';
}
:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
:after {
  left: 1.5em;
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

`;

const LoadingIndicatorWrapper = styled.div`
  height: 150px;

  display: flex;
  justify-items: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <LoadingIndicatorWrapper>
      <LoadingIndicator>Loading...</LoadingIndicator>
    </LoadingIndicatorWrapper>
  );
}
