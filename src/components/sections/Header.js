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
            <DesktopImage src={HeroImage} alt="Hero" />
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
  margin-bottom: -400px;
  position: relative;
`;

const DesktopImage = styled.img`
  width: 100%;
  min-width: 1920px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 320px;
  top: 24%;
  margin-left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
  }

  p {
    margin-top: 16px;
    text-align: center;
    opacity: 0.6;
    font-size: 18px;
    line-height: 30px;
  }
`;

export default Header;
