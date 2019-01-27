import styled from 'styled-components';

import { COLOR, FONT_SIZE, SHADOW } from 'constants';
import { Card, Button } from 'components/global';

export const CardContainer = styled(Card)`
  padding: 0;
  overflow: hidden;
  height: 380px;
  transition: box-shadow 0.3s ease-out;

  ${props =>
    !props.inactive &&
    `
    &:hover {
      box-shadow: ${SHADOW.regular};
      
      ${Cover} {
        height: 120px;
      }
      ${ApplyButton} {
        opacity: 1;
      }
    }
  `};
`;

export const Cover = styled.div`
  background-color: ${props => props.color};
  height: 180px;
  transition: height 0.3s ease-out;
`;

export const CardContent = styled.div`
  padding: 0 28px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  box-sizing: border-box;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid ${COLOR.white.regular};
  z-index: 1;
  margin-top: -45px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`;

export const Subtitle = styled.div`
  ${FONT_SIZE.xxsmall};
  color: ${COLOR.blue_dark.light};
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const ApplyButton = styled(Button)`
  margin: 8px 0;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`;
