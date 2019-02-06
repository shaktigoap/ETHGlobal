import React from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HorizontalScroller = ({ children, ...other }) => (
  <Wrapper {...other}>
    <ScrollMenu
      transition={0.4}
      dragging={false}
      wheel={false}
      arrowLeft={<ArrowLeft />}
      arrowRight={<Arrow />}
      hideArrows={true}
      hideSingleArrow={true}
      data={children}
    />
  </Wrapper>
);

const Arrow = styled.div`
  width: 54px;
  height: 54px;
  background-color: white;
  box-shadow: ${props => props.theme.shadow.alt};
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 21px;
    left: 18px;
    width: 12px;
    height: 12px;
    border-top: 3px solid ${props => props.theme.color.blue_dark.alt};
    border-right: 3px solid ${props => props.theme.color.blue_dark.alt};
    transform: rotate(45deg);
  }
`;

const ArrowLeft = styled(Arrow)`
  &::after {
    transform: rotate(-135deg);
    left: 22px;
  }
`;

const Wrapper = styled.div`
  .menu-item-wrapper {
    width: 256px;
    margin-left: 4px;

    &:not(:first-child) {
      margin-left: 24px;
    }
  }

  .menu-wrapper {
    padding: 24px 0;
  }

  .scroll-menu-arrow {
    margin-left: -24px;
    z-index: 1;
    transition: opacity 0.1s ease-in;

    &:first-of-type {
      margin-right: -24px;
      margin-left: 0;
    }

    &--disabled {
      opacity: 0;
    }
  }
`;

export default HorizontalScroller;
