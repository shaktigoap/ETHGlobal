import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import { Section, Container } from 'components/global';
import ExternalLink from 'common/ExternalLink';
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
          push the limits of new technologies. At ETHGlobal we're leveraging our
          team's experience running{' '}
          <ExternalLink href="https://ethwaterloo.com/">
            ETHWaterloo
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://hackthenorth.com/">
            Hack the North
          </ExternalLink>{' '}
          to foster a world-class ecosystem of Ethereum developers and
          entrepreneurs, collectively building the Web 3 world.
        </p>
        <p>
          To make this happen, we offer assistance and expertise to regional
          hackathons across the globe, and host one major hackathon ourselves
          every year. Our assistance includes a toolset of APIs for event
          registration and management, a playbook for running an Ethereum
          hackathon, and our assistance securing leading speakers, judges, and
          sponsors in the blockchain space.
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
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 24px;
`;

const Icons = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 8px;

  img {
    margin: 0 12px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export default About;
