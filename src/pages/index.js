import React from 'react';

import Layout from 'common/Layout';
import Header from 'components/sections/Header';
import About from 'components/sections/About';
import Events from 'components/sections/Events';
import Highlights from 'components/sections/Highlights';
import Partners from 'components/sections/Partners';
import Sponsors from 'components/sections/Sponsors';
import Team from 'components/sections/Team';
import FAQ from 'components/sections/FAQ';
import Footer from 'components/sections/Footer';

import { FloatingContainer } from 'components/global';
import AlertCard from 'common/AlertCard';
import NewsletterForm from 'common/NewsletterForm';

const IndexPage = () => (
  <Layout>
    <Header />
    <About style={{ paddingBottom: 174, position: 'relative' }} />
    <FloatingContainer>
      <AlertCard style={{ marginTop: -80 }} />
    </FloatingContainer>
    <Events style={{ paddingTop: 158, paddingBottom: 310 }} />
    <FloatingContainer>
      <NewsletterForm style={{ marginTop: -214 }} />
    </FloatingContainer>
    <Highlights style={{ paddingTop: 310 }} />
    <Partners />
    <Sponsors />
    <Team />
    <FAQ />
    <Footer />
  </Layout>
);

export default IndexPage;
