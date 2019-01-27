import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

import { GlobalStyles } from './GlobalStyles';

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyles />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
