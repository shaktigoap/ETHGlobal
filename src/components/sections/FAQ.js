import React from 'react';
import styled from 'styled-components';

import { Section, Container } from 'components/global';

import FAQItem from 'common/FAQ';

const FAQS = [
  {
    title: 'How much do ETHGlobal hackathons cost?',
    content: () => <>ETHGlobal hackathons are always free for hackers.</>,
  },
  {
    title: 'How do I apply to a hackathon?',
    content: () => (
      <>Find the event you want to hack at above, and click "apply".</>
    ),
  },
  {
    title: 'What is ETHGlobal?',
    content: () => (
      <>
        ETHGlobal helps run hackathons all over the world. Our goal is to be the
        best on-ramp to the global Ethereum community. Our work is supported by
        the Ethereum Foundation, and the many sponsors who make our events
        possible.
      </>
    ),
  },
  {
    title: 'Can you help run a hackathon in my city?',
    content: () => (
      <>
        You can apply here! If we can't make your event an official part of our
        calendar, we may still be able to provide support and advice on how to
        make your hackathon the best it can be.
      </>
    ),
  },
];

const FAQ = props => (
  <Section id="faq" {...props}>
    <Container>
      <h2 style={{ textAlign: 'center' }}>FAQs</h2>
      <FaqsContainer>
        {FAQS.map(({ title, content }) => (
          <FAQItem title={title} key={title}>
            {content()}
          </FAQItem>
        ))}
      </FaqsContainer>
    </Container>
  </Section>
);

const FaqsContainer = styled.div`
  margin-top: 48px;

  > div {
    margin: 16px 0;
  }
`;

export default FAQ;
