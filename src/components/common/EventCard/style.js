import styled from 'styled-components';

import { Card, Button } from 'components/global';
import ExternalLink from 'common/ExternalLink';

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
  border: 3px solid ${props => props.theme.color.white.regular};
  z-index: 1;
  margin-top: -45px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`;

export const Subtitle = styled.div`
  ${props => props.theme.font_size.xxsmall};
  color: ${props => props.theme.color.blue_dark.alt_light};
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

export const LinkWrapper = styled(ExternalLink)`
  &:hover {
    text-decoration: none;
  }
`;

export const CardContainer = styled(Card)`
  padding: 0;
  border: 2px solid #fff;
  overflow: hidden;
  height: 380px;
  transition: height, opacity 0.3s ease-out, transform 0.2s ease-out;
  opacity: ${props => (props.inactive ? 0.7 : 1)};

  ${props =>
    !props.inactive &&
    `
    &:hover {
      box-shadow: ${props => props.theme.shadow.regular};
      
      ${Cover} {
        height: 120px;
      }
      ${ApplyButton} {
        opacity: 1;
      }
    }

    @media (max-width: 992px) {
      ${Cover} {
        height: 120px;
      }
      ${ApplyButton} {
        opacity: 1;
      }
    }
  `};

  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;
