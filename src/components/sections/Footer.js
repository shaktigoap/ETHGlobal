import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/global';
import SocialIcons from 'common/SocialIcons';
import ExternalLink from 'common/ExternalLink';

import EthGlobalLogo from 'static/icons/ETHGlobal.svg';

const Footer = props => (
  <FooterWrapper {...props}>
    <Container>
      <Centered>
        <LogoContainer>
          <img src={EthGlobalLogo} alt="ETHGlobal" />
        </LogoContainer>
        <p>
          Contact us if you are interested in contributing or have any other
          inquiries
        </p>
        <a href="mailto:hello@ethglobal.co">hello@ethglobal.co</a>
        <SocialIcons white style={{ marginTop: 24 }} />
      </Centered>
      <Copyright>
        <span>© ETHGLOBAL 2018. ALL RIGHTS RESERVED.</span>
        <span>
          Made with ❤ by{' '}
          <ExternalLink href="http://ethdesign.co/">ETHDesign</ExternalLink>{' '}
          &amp;{' '}
          <ExternalLink href="https://devfolio.co/">Devfolio</ExternalLink>
        </span>
      </Copyright>
    </Container>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background-color: rgba(31, 41, 79, 1);
  padding-bottom: 48px;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    color: ${props => props.theme.color.white.light};
    margin: 16px 0;
  }

  a {
    color: ${props => props.theme.color.white.regular};
    font: ${props => props.theme.font.primary};
    ${props => props.theme.font_size.large};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: -64px;
  margin-bottom: 24px;
`;

const Copyright = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: ${props => props.theme.color.white.light};
  ${props => props.theme.font_size.xxsmall};

  span {
    margin: 8px 0;
  }

  a {
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Footer;
