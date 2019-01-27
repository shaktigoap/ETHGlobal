import React from 'react';

import Layout from 'common/Layout';
import About from 'components/sections/About';
import Sponsors from 'components/sections/Sponsors';
import FAQ from 'components/sections/FAQ';

const IndexPage = () => (
  <Layout>
    <About />
    <Sponsors />
    <FAQ />
  </Layout>
);

export default IndexPage;
