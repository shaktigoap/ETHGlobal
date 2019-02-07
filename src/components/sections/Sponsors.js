import React from 'react';
import styled from 'styled-components';

import { Section, Container, Button } from 'components/global';
import ExternalLink from 'common/ExternalLink';

import Maker from 'static/sponsors/maker.svg';
import Celer from 'static/sponsors/celer.svg';
import Logo0x from 'static/sponsors/0x.svg';
import Skale from 'static/sponsors/skale.svg';
import Brave from 'static/sponsors/brave.svg';
import Augur from 'static/sponsors/augur.svg';
import ChainLink from 'static/sponsors/chainlink.svg';
import Bloqboard from 'static/sponsors/bloqboard.svg';
import Consensys from 'static/sponsors/consensys.svg';
import Harbor from 'static/sponsors/harbor.svg';
import Dharma from 'static/sponsors/dharma.png';
import Thegraph from 'static/sponsors/thegraph.svg';
import SetP from 'static/sponsors/set.svg';
import Kyber from 'static/sponsors/kyber.svg';
import Quantstamp from 'static/sponsors/quantstamp.svg';
import Coinbase from 'static/sponsors/coinbase.svg';
import Golem from 'static/sponsors/golem.svg';
import Circle from 'static/sponsors/circle.svg';
import Dydx from 'static/sponsors/dydx.svg';
import Omisego from 'static/sponsors/omisego.svg';
import Gitcoin from 'static/sponsors/gitcoin.svg';
import Zilliqa from 'static/sponsors/zilliqa.svg';
import Aragon from 'static/sponsors/aragon.svg';
import Status from 'static/sponsors/status.svg';
import Ledger from 'static/sponsors/ledger.png';
import Coinfund from 'static/sponsors/coinfund.png';
import Polychain from 'static/sponsors/polychain.png';

// title is the name of sponsor
// href the link of their website
// Add logo image to static/sponsors/
// img should be first imported as done above
// Assign value in img object below

const SPONSORS = [
  {
    title: 'MakerDao',
    href: '',
    img: Maker,
  },
  {
    title: 'Celer',
    href: '',
    img: Celer,
  },
  {
    title: '0x',
    href: '',
    img: Logo0x,
  },
  {
    title: 'Skale',
    href: '',
    img: Skale,
  },
  {
    title: 'Brave',
    href: '',
    img: Brave,
  },
  {
    title: 'Augur',
    href: '',
    img: Augur,
  },
  {
    title: 'Chainlink',
    href: '',
    img: ChainLink,
  },
  {
    title: 'Bloqboard',
    href: '',
    img: Bloqboard,
  },
  {
    title: 'Consensys',
    href: '',
    img: Consensys,
  },
  {
    title: 'Harbor',
    href: '',
    img: Harbor,
  },
  {
    title: 'Dharma',
    href: '',
    img: Dharma,
  },
  {
    title: 'The Graph',
    href: '',
    img: Thegraph,
  },
  {
    title: 'Set Protocol',
    href: '',
    img: SetP,
  },
  {
    title: 'Kyber Network',
    href: '',
    img: Kyber,
  },
  {
    title: 'Quantstamp',
    href: '',
    img: Quantstamp,
  },
  {
    title: 'Coinbase',
    href: '',
    img: Coinbase,
  },
  {
    title: 'Golem',
    href: '',
    img: Golem,
  },
  {
    title: 'Circle',
    href: '',
    img: Circle,
  },
  {
    title: 'Dy/Dx',
    href: '',
    img: Dydx,
  },
  {
    title: 'Omisego',
    href: '',
    img: Omisego,
  },
  {
    title: 'Gitcoin',
    href: '',
    img: Gitcoin,
  },
  {
    title: 'Zilliqa',
    href: '',
    img: Zilliqa,
  },
  {
    title: 'Aragon',
    href: '',
    img: Aragon,
  },
  {
    title: 'Status',
    href: '',
    img: Status,
  },
  {
    title: 'Ledger',
    href: '',
    img: Ledger,
  },
  {
    title: 'Coinfund',
    href: '',
    img: Coinfund,
  },
  {
    title: 'Polychain',
    href: '',
    img: Polychain,
  },
];

const Sponsors = props => (
  <Section id="sponsors" {...props}>
    <Container>
      <h2 style={{ textAlign: 'center' }}>Sponsors</h2>
      <Grid>
        {SPONSORS.map(({ title, href, img }) =>
          href !== '' ? (
            <ExternalLink href={href} key={title}>
              <img src={img} alt={title + 'Logo'} />
            </ExternalLink>
          ) : (
            <div>
              <img src={img} alt={title + 'Logo'} />
            </div>
          )
        )}
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

  div,
  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    max-height: 72px;
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
