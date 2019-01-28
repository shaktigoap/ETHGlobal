import React from 'react';
import styled from 'styled-components';

import { Section, Container, Card } from 'components/global';
import ExternalLink from 'common/ExternalLink';

import { COLOR } from 'constants';

import L4Logo from 'static/logos/L4.svg';
import SvangelLogo from 'static/logos/Svangel.svg';
import EthereumLogo from 'static/logos/Ethereum.svg';

const PARTNERS = [
  {
    name: 'L4',
    logo: L4Logo,
    href: 'http://l4.ventures/',
  },
  {
    name: 'Svangel',
    logo: SvangelLogo,
    href: 'https://svangel.com/',
  },
  {
    name: 'Ethereum Foudation',
    logo: EthereumLogo,
    href: 'https://ethereum.org/',
  },
];

const Sponsors = props => (
  <Section id="sponsors" {...props} background={COLOR.blue.light}>
    <Container>
      <h2 style={{ textAlign: 'center' }}>Partners</h2>
      <Grid>
        {PARTNERS.map(({ name, logo, href }) => (
          <ImgCard noShadow key={name}>
            <ExternalLink href={href}>
              <img src={logo} alt={name + 'logo'} />
            </ExternalLink>
          </ImgCard>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ImgCard = styled(Card)`
  height: 100%;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (max-width: 991px) {
    padding: 24px;
  }
`;

export default Sponsors;
