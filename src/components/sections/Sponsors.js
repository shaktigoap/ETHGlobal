import React from 'react';
import styled from 'styled-components';

import { Section, Container, Button } from 'components/global';
import ExternalLink from 'common/ExternalLink';

import SampleLogo1 from 'static/logos/Ethereum.svg';
import SampleLogo2 from 'static/logos/Svangel.svg';

const SPONSORS = [
  {
    title: 'Ethereum1',
    href: 'https://www.ethereum.org/',
    img: SampleLogo1,
  },
  {
    title: 'Ethereum1',
    href: 'https://www.ethereum.org/',
    img: SampleLogo2,
  },
  {
    title: 'Ethereum2',
    href: 'https://www.ethereum.org/',
    img: SampleLogo1,
  },
  {
    title: 'Ethereum3',
    href: 'https://www.ethereum.org/',
    img: SampleLogo1,
  },
  {
    title: 'Ethereum4',
    href: 'https://www.ethereum.org/',
    img: SampleLogo2,
  },
  {
    title: 'Ethereum5',
    href: 'https://www.ethereum.org/',
    img: SampleLogo1,
  },
  {
    title: 'Ethereum6',
    href: 'https://www.ethereum.org/',
    img: SampleLogo1,
  },
];

const Sponsors = props => (
  <Section id="sponsors" {...props}>
    <Container>
      <h2 style={{ textAlign: 'center' }}>Sponsors</h2>
      <Grid>
        {SPONSORS.map(({ title, href, img }) => (
          <ExternalLink href={href} key={title}>
            <img src={img} alt={title + 'Logo'} />
          </ExternalLink>
        ))}
      </Grid>
      <ButtonWrapper>
        <Button as="a" href="mailto:sponsor@ethglobal.co">
          Become a sponsor
        </Button>
      </ButtonWrapper>
    </Container>
  </Section>
);

const Grid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  grid-gap: 48px;
  justify-content: center;

  img {
    width: 100%;
    height: 72px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 72px;
  text-align: center;
  text-transform: uppercase;

  ${Button} {
    &:hover {
      text-decoration: none;
    }
  }
`;

export default Sponsors;
