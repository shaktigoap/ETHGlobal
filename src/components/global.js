import styled from 'styled-components';

import { SCREEN, COLOR, FONT_SIZE, FONT } from 'constants';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${SCREEN.xs}) {
    max-width: 540px;
    padding: 0;
  }

  @media (min-width: ${SCREEN.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${SCREEN.md}) {
    max-width: 960px;
  }
`;

export const Section = styled.section`
  padding: 96px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  padding: 0 32px;
  border-radius: 27px;
  background-color: ${COLOR.blue.regular};
  color: ${COLOR.white.regular};

  font-family: ${FONT.primary};
  font-weight: bold;
  ${FONT_SIZE.small};

  ${props =>
    props.small &&
    `
    ${FONT_SIZE.xsmall};
    height: 44px;
    border-radius: 22px;
    padding: 0 24px;
  `};

  ${props =>
    props.stretch &&
    `
    width: 100%;
  `};
`;
