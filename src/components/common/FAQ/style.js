import styled from 'styled-components';

import { COLOR, SHADOW, FONT, FONT_SIZE } from 'constants';

export const Wrapper = styled.div`
  .faq {
    border-radius: 5px;
    background-color: ${COLOR.white.regular};
    box-shadow: ${SHADOW.regular};
    transition: box-shadow 0.3s ease-out;

    &.active {
      box-shadow: ${SHADOW.light};
    }
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;

    font-family: ${FONT.primary};
    padding: 32px;
    padding-right: 72px;
    font-weight: 500;
    position: relative;
    ${FONT_SIZE.regular};
    color: ${COLOR.blue_dark.regular};

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
    ${FONT_SIZE.small};
  }
`;
