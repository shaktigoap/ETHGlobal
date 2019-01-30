import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-radius: 5px;
    background-color: ${props => props.theme.color.white.regular};
    box-shadow: ${props => props.theme.shadow.regular};
    transition: box-shadow 0.3s ease-out;

    &.active {
      box-shadow: ${props => props.theme.shadow.light};
    }
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    font-family: ${props => props.theme.font.primary};
    padding: 32px;
    padding-right: 72px;
    font-weight: 500;
    position: relative;
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.blue_dark.regular};

    &::after {
      content: '+';
      position: absolute;
      top: 30%;
      right: 32px;
      font-size: 32px;
    }

    &.active {
      ::after {
        content: '-';
        top: 28%;
        right: 36px;
      }
    }
  }

  .faq-content {
    padding: 32px;
    padding-top: 0;
    ${props => props.theme.font_size.small};
  }
`;
