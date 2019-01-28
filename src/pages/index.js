import React from 'react';

import Layout from 'common/Layout';
import About from 'components/sections/About';
import Events from 'components/sections/Events';
import Partners from 'components/sections/Partners';
import FAQ from 'components/sections/FAQ';

import { FloatingContainer } from 'components/global';
import AlertCard from 'common/AlertCard';

const IndexPage = () => (
  <Layout>
    <About style={{ paddingBottom: 144 }} />
    <FloatingContainer>
      <AlertCard
        title="Announcement"
        content="Applications open for ETHDenver (Feb 15-17), ETHParis (Mar 8-10), and ETHCapeTown (Apr 19-21)!"
        style={{ marginTop: -80 }}
      />
    </FloatingContainer>
    <Events style={{ paddingTop: 144 }} />
    <Partners />
    <FAQ />
  </Layout>
);

export default IndexPage;
