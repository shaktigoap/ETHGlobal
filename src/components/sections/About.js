import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import { Section, Container } from 'components/global';
import SocialIcons from 'common/SocialIcons';

import theme from '../../theme';

const About = props => (
  <Section id="about" {...props}>
    <Container>
      <h3 style={{ color: theme.color.blue.regular }}>About us</h3>
      <HeadingContainer>
        <h1>Building our decentralized future</h1>
        <Media query="(min-width: 992px)">
          <SocialIcons style={{ alignSelf: 'flex-end' }} />
        </Media>
      </HeadingContainer>
      <Content>
        <p>
          Hackathons teach new skills, strengthen developer communities, and
          push the limits of new technologies. At ETHGlobal, we're leveraging
          our years of experience to foster a world-class ecosystem of Ethereum
          developers and entrepreneurs.nd entrepreneurs, collectively building
          the Web 3 world.
        </p>
        <p>
          <strong>Learn:</strong> New to Ethereum? Our events are the best way
          to join the community. <br />
          <strong>Build:</strong> Create a product, get real feedback from top
          developers, launch your company. <br />
          <strong>Sponsor:</strong> Reach and engage the largest collection of
          Ethereum developers on the planet. <br />
        </p>
      </Content>
    </Container>
  </Section>
);

const HeadingContainer = styled.div`
  display: flex;
  margin: 32px 0;
  justify-content: space-between;

  h1 {
    max-width: 800px;

    @media (max-width: 576px) {
      font-size: 50px;
      line-height: 64px;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export default About;
