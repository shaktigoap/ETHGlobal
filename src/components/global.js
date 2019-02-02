import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
    padding: 0;
  `};
`;

export const Section = styled.section`
  padding: 96px 0;
  background: ${({ background }) => (background ? background : 'none')};
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  padding: 0 32px;
  border-radius: 27px;
  background-color: ${props => props.theme.color.blue.regular};
  color: ${props => props.theme.color.white.regular};

  font-family: ${props => props.theme.font.primary};
  font-weight: bold;
  ${props => props.theme.font_size.small};

  ${props =>
    props.small &&
    `
    ${props => props.theme.font_size.xsmall};
    height: 44px;
    border-radius: 22px;
    padding: 0 24px;
  `};

  ${props => props.stretch && `width: 100%;`};

  &:active {
    background-color: ${props => props.theme.color.blue_dark.regular};
  }
`;

export const Card = styled.div`
  padding: ${props => (props.small ? '24px' : '40px')};
  background-color: ${props => props.theme.color.white.regular};
  border-radius: 10px;
  box-shadow: ${props =>
    props.noShadow ? 'none' : props => props.theme.shadow.light};
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
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.xxsmall};
  letter-spacing: 1px;

  ${props => {
    switch (props.appearance) {
      case 'alert':
        return `
          background-color: ${props.theme.color.red.light};
          color: ${props.theme.color.red.regular};
        `;
      case 'secondary':
        return `
          background-color: ${props.theme.color.blue_dark.xlight};
          color: ${props.theme.color.blue_dark.light};
        `;
      case 'primary':
      default:
        return `
          background-color: ${props.theme.color.blue.light};
          color: ${props.theme.color.blue.regular};
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
  background-color: ${props => props.theme.color.blue.xlight};
  color: ${props => props.theme.color.blue_dark.regular};
  ${props => props.theme.font_size.small};

  &:placeholder {
    color: ${props => props.theme.color.blue_dark.alt_light};
  }

  &:focus {
    border: 2px solid ${props => props.theme.color.blue.light};
  }
`;

export const FloatingContainer = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;

  & > div {
    position: absolute;

    @media (max-width: 991px) {
      margin: 0 16px;
    }
  }
`;
