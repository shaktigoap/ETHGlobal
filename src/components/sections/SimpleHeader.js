import React from 'react';
import styled from 'styled-components';

import { ReactComponent as EthGlobalLogo } from 'static/logos/ETHGlobal.svg';

import { Container } from 'components/global';

const SimpleHeader = props => (
  <header {...props}>
    <Container>
      <Logo />
    </Container>
  </header>
);

const Logo = props => (
  <LogoContainer>
    <EthGlobalLogo viewBox="0 0 722 160" />
  </LogoContainer>
);

const LogoContainer = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  svg {
    width: 100%;
  }
`;

export default SimpleHeader;
