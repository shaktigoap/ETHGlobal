import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';

import HeroImage from 'static/Hero.svg';
import HeroMobileImage from 'static/Hero-mobile.svg';
import EthGlobalLogo from 'static/logos/ETHGlobal.svg';

const Header = props => (
  <header {...props}>
    <Media query="(max-width: 991px)">
      {matches =>
        matches ? (
          <>
            <img src={HeroMobileImage} alt="Hero" />
          </>
        ) : (
          <ImageWrapper>
            <img src={HeroImage} alt="Hero" />
            <LogoContainer>
              <img src={EthGlobalLogo} alt="ETHGlobal" />
              <p>
                Onboarding thousands of developers into the Ethereum ecosystem
              </p>
            </LogoContainer>
          </ImageWrapper>
        )
      }
    </Media>
  </header>
);

const ImageWrapper = styled.div`
  margin-bottom: -22vw;
  position: relative;

  img {
    width: 100%;
    z-index: -1;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 16%;
  top: 24%;
  left: 42%;

  p {
    margin-top: 16px;
    text-align: center;
    font-size: 80%;
    line-height: 160%;
    opacity: 0.6;
  }
`;

export default Header;
