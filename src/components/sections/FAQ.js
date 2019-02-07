import React from 'react';
import styled from 'styled-components';

import { Section, Container } from 'components/global';

import ExternalLink from 'common/ExternalLink';
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
  {
    title: 'What is Ethereum?',
    content: () => (
      <>
        Ethereum is a programmable blockchain. It can be used for many things,
        including payments, new digital assets, financial "smart contracts", or
        decentralized applications. <br />
        You can find out more on the{' '}
        <ExternalLink href="http://ethereum.org">
          Ethereum project website
        </ExternalLink>
        , or on{' '}
        <ExternalLink href="https://docs.ethhub.io/">EthHub</ExternalLink>, a
        community-built resource. If you want to get caught up on what happened
        in Ethereum in 2018,{' '}
        <ExternalLink href="https://medium.com/@jjmstark/the-year-in-ethereum-87a17d6f8276">
          check out this long "year in review" post.
        </ExternalLink>
      </>
    ),
  },
  {
    title: 'Where can I learn more about how to build on Ethereum?',
    content: () => (
      <>
        We're glad you asked! Here are some of our favourite resources:
        <ul>
          <li>
            ConsenSys maintains a great resource for new developers that
            includes common tools, docs, and other resources{' '}
            <ExternalLink href="https://github.com/ConsenSys/ethereum-developer-tools-list/blob/master/README.md">
              here
            </ExternalLink>
            .
          </li>
          <li>
            "Mastering Ethereum" by Andreas M. Antonopoulos and Gavin Wood is
            available free & open-source{' '}
            <ExternalLink href="https://github.com/ethereumbook/ethereumbook/blob/develop/README.md">
              here
            </ExternalLink>
            .
          </li>
          <li>
            Etherscan, a popular Ethereum block explorer, has a list of
            resources{' '}
            <ExternalLink href="https://beta.etherscan.io/directory/Learning_Resources/Ethereum">
              here
            </ExternalLink>
            .
          </li>
          <li>
            You can also check out online tutorials and code schools, like:
            <ul>
              <li>
                <ExternalLink href="https://www.chainshot.com/">
                  Chainshot
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://cryptozombies.io/">
                  CryptoZombies
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://blockgeeks.com/">
                  Blockgeeks
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="http://www.dappuniversity.com/">
                  DappUniversity
                </ExternalLink>
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'What have hackers built at previous events?',
    content: () => (
      <>
        Looking at previous hackathon projects is a great way to get inspired
        for your own! You can view all of the previous submissions from
        ETHGlobal hackathons below. <br />
        <br />
        <ExternalLink href="https://ethsingapore.devpost.com/submissions">
          All submissions from ETHSingapore (Dec 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethsanfrancisco.devpost.com/submissions">
          All submissions from ETHSanFrancisco (Oct 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethberlin.devpost.com/">
          All submissions from ETHBerlin (Sept 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethindia.devfolio.co/submissions">
          All submissions from ETHIndia (Aug 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethbuenosaires.devpost.com/">
          All submissions from ETHBuenosAires (April 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethdenver.devpost.com/submissions">
          All submissions from ETHDenver (Feb 2018)
        </ExternalLink>
        <br />
        <ExternalLink href="https://ethwaterloo.devpost.com/submissions">
          All submissions from ETHWaterloo (Oct 2017)
        </ExternalLink>
        <br />
      </>
    ),
  },
  {
    title: 'Can I be a mentor at an upcoming ETHGlobal hackathon?',
    content: () => (
      <>
        Yes! Find the event you'd like to mentor at above and click through to
        the application page. Mentors are a critical part of ETHGlobal event -
        they assist hackers by giving advice, helping troubleshoot, and
        providing other assistance.
      </>
    ),
  },
  {
    title: 'Can my company sponsor an upcoming ETHGlobal hackathon?',
    content: () => (
      <>
        Absolutely! Please send all sponsorship inquiries to{' '}
        <a href="mailto:sponsor@ethglobal.co">sponsor@ethglobal.co</a>
      </>
    ),
  },
];

const FAQ = props => (
  <Section id="faq" {...props} background="rgba(86,102,246,0.05)">
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
