import React from 'react';
import styled from 'styled-components';

import { Section, Container } from 'components/global';
import ExternalLink from 'common/ExternalLink';
import { COLOR } from 'constants';

import GithubIcon from 'static/icons/Github.svg';
import MediumIcon from 'static/icons/Medium.svg';
import TwitterIcon from 'static/icons/Twitter.svg';

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/ethglobal',
  },
  {
    name: 'Medium',
    icon: MediumIcon,
    href: 'https://medium.com/ethglobal',
  },
  {
    name: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/ethglobal',
  },
];

const About = () => (
  <Section id="about">
    <Container>
      <h3 style={{ color: COLOR.blue.regular }}>About us</h3>
      <HeadingContainer>
        <h1>Building our decentralized future</h1>
        <Icons>
          {SOCIAL_LINKS.map(({ name, icon, href }) => (
            <ExternalLink key={name} href={href}>
              <img src={icon} alt={name} />
            </ExternalLink>
          ))}
        </Icons>
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

  @media (max-width: 991px) {
    grid-gap: 0;
  }
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
