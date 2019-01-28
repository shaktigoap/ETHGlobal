import React from 'react';

import Layout from 'common/Layout';
import About from 'components/sections/About';
import Events from 'components/sections/Events';
import Partners from 'components/sections/Partners';
import FAQ from 'components/sections/FAQ';
import Footer from 'components/sections/Footer';

import { FloatingContainer } from 'components/global';
import AlertCard from 'common/AlertCard';
import NewsletterForm from 'common/NewsletterForm';

const IndexPage = () => (
  <Layout>
    <About style={{ paddingBottom: 144 }} />
    <FloatingContainer>
      <AlertCard style={{ marginTop: -80 }} />
    </FloatingContainer>
    <Events style={{ paddingTop: 144, paddingBottom: 296 }} />
    <FloatingContainer>
      <NewsletterForm style={{ marginTop: -200 }} />
    </FloatingContainer>
    <Partners style={{ paddingTop: 296 }} />
    <FAQ />
    <Footer />
  </Layout>
);

export default IndexPage;
