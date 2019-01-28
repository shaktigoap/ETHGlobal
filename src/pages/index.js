import React from 'react';

import Layout from 'common/Layout';
import Header from 'components/sections/Header';
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
    <Header />
    <About style={{ paddingBottom: 160, position: 'relative' }} />
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
