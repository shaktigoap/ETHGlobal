import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

import SEO from '../SEO';
import { GlobalStyles } from './GlobalStyles';
import theme from '../../../theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
