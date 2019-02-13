import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import { ReactComponent as EthGlobalLogo } from 'static/logos/ETHGlobal.svg';

import { Container } from 'components/global';

const Header = props => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(name: { eq: "hero" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hero_mobile: file(name: { eq: "hero-mobile" }) {
          childImageSharp {
            fluid(maxWidth: 1984) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header {...props}>
        <MobileImageWrapper>
          <Img
            style={{
              width: '100%',
            }}
            fluid={data.hero_mobile.childImageSharp.fluid}
            alt="Hero"
            mobile
          />
          <Container>
            <Logo style={{ marginTop: 40 }} />
          </Container>
        </MobileImageWrapper>
        <ImageWrapper>
          <FullWidthImage
            as={Img}
            width={1920}
            fluid={data.hero.childImageSharp.fluid}
            alt="Hero"
          />
          <Logo float />
        </ImageWrapper>
      </header>
    )}
  />
);

const Logo = ({ float = false, ...other }) => (
  <LogoContainer float={float} {...other}>
    <EthGlobalLogo viewBox="0 0 722 160" />
    <p>Onboarding thousands of developers into the Ethereum ecosystem</p>
  </LogoContainer>
);

const MobileImageWrapper = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: -400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 991px) {
    display: none;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  min-width: ${props => props.width}px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const LogoContainer = styled.div`
  svg {
    width: 100%;

    @media (max-width: 575px) {
      margin-bottom: -20px;
    }
  }

  p {
    text-align: center;
    opacity: 0.6;
    font-size: 18px;
    line-height: 30px;
  }

  ${props =>
    props.float &&
    `
    position: absolute;
    width: 320px;
    top: 24%;
    margin-left: 50%;
    transform: translateX(-50%);

    svg {
      margin: -16px 0;
    }
  `}
`;

export default Header;
