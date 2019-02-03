import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import { Section, Container } from 'components/global';
import EventCard from 'common/EventCard';

import theme from '../../theme';
import { StaticQuery, graphql } from 'gatsby';

const UPCOMING_EVENTS = [
  {
    title: 'ETHDenver',
    location: 'Denver, Colorado',
    dates: 'Feb 15-17, 2019',
    avatar: 'ethdenver.jpg',
    primaryColor: '#FBD0DA',
    href: 'https://ethdenver.com/',
  },
  {
    title: 'ETHParis',
    location: 'Paris, France',
    dates: 'Mar 8-10, 2019',
    avatar: 'ethparis.jpg',
    primaryColor: '#8C09FF',
    href: 'https://ethparis.com/',
  },
  {
    title: 'ETHCapeTown',
    location: 'Cape Town, South Africa',
    dates: 'Apr 19-20, 2019',
    avatar: 'ethcapetown.jpg',
    primaryColor: '#2F302E',
    href: 'https://ethcapetown.com/',
  },
];

const Events = props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "hackathon" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 90, maxHeight: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="events" {...props} background={theme.color.blue.xlight}>
        <ReactTooltip place="right" />
        <Container fluid>
          <HeadingContainer>
            <h3>Events</h3>
            <h2>Upcoming Events</h2>
          </HeadingContainer>
          <CardGrid num={UPCOMING_EVENTS.length}>
            {UPCOMING_EVENTS.map(({ avatar, ...event }) => {
              const avatarImg = data.allFile.edges.find(
                ({ node }) => node.relativePath === avatar
              ).node;
              return (
                <EventCard
                  {...event}
                  avatar={avatarImg.childImageSharp.fluid}
                />
              );
            })}
          </CardGrid>
          <h3 style={{ marginTop: 64, textAlign: 'center' }}>Past Events</h3>
          <CardGrid num={UPCOMING_EVENTS.length * 2} scroll>
            {[...UPCOMING_EVENTS, ...UPCOMING_EVENTS].map(
              ({ avatar, ...event }) => {
                const avatarImg = data.allFile.edges.find(
                  ({ node }) => node.relativePath === avatar
                ).node;
                return (
                  <EventCard
                    {...event}
                    avatar={avatarImg.childImageSharp.fluid}
                    inactive
                  />
                );
              }
            )}
          </CardGrid>
        </Container>
      </Section>
    )}
  />
);

const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 16px;

  > h3 {
    color: ${props => props.theme.color.blue.regular};
  }

  > h2 {
    margin: 8px 0;
  }
`;

const CardGrid = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 256px);
  justify-content: center;
  grid-gap: 24px;

  ${props =>
    props.scroll &&
    `
    padding: 0 32px;
    padding-bottom: 24px;
    grid-template-columns: ${`repeat(${props.num}, 256px)`};
    overflow-x: scroll;
    justify-content: start;
  `};
`;

export default Events;
