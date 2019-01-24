import styled from 'styled-components';

import { SCREEN, COLOR, FONT_SIZE, FONT, SHADOW } from 'constants';

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
  outline: none;
  cursor: pointer;
  display: inline-flex;
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

  ${props => props.stretch && `width: 100%;`};

  &:active {
    background-color: ${COLOR.blue_dark.regular};
  }
`;

export const Card = styled.div`
  padding: ${props => (props.small ? '16px' : '40px')};
  background-color: ${COLOR.white.regular};
  border-radius: 10px;
  box-shadow: ${props => (props.noShadow ? 'none' : SHADOW.regular)};
`;

export const Pill = styled.div`
  height: 36px;
  border-radius: 18px;
  padding: 0 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: bold;
  font-family: ${FONT.primary};
  ${FONT_SIZE.xxsmall};

  ${props => {
    switch (props.appearance) {
      case 'alert':
        return `
          background-color: ${COLOR.red.light};
          color: ${COLOR.red.regular};
        `;
      case 'secondary':
        return `
          background-color: ${COLOR.blue_dark.xlight};
          color: ${COLOR.blue_dark.light};
        `;
      case 'primary':
      default:
        return `
          background-color: ${COLOR.blue.light};
          color: ${COLOR.blue.regular};
        `;
    }
  }}

  ${props => props.stretch && `width: 100%`};
`;

export const Input = styled.input`
  outline: none;
  height: 54px;
  border-radius: 27px;
  padding: 0 24px;
  border: 2px solid transparent;
  width: 100%;
  background-color: ${COLOR.blue.xlight};
  color: ${COLOR.blue_dark.regular};
  ${FONT_SIZE.small};

  &:placeholder {
    color: ${COLOR.blue_dark.light};
  }

  &:focus {
    border: 2px solid ${COLOR.blue.light};
  }
`;
