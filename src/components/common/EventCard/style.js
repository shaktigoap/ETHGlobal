import styled from 'styled-components';

import { COLOR, FONT_SIZE } from 'constants';
import { Card } from 'components/global';

export const CardContainer = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

export const Cover = styled.div`
  background-color: ${props => props.color};
  height: 190px;
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
