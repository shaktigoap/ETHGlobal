import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import theme from '../../theme';

import { Section, Container } from 'components/global';
import ExternalLink from 'common/ExternalLink';

// To add a team member:
// - Add profile image to src/images/team
// - Fill details in the array below
// - avatar is the name of the profile image
const TEAM = [
  {
    name: 'Kartik Talwar',
    // title: 'Co-Founder',
    avatar: 'kartik.jpg',
    href: 'https://twitter.com/TheRealKartik',
  },
  {
    name: 'Liam Horne',
    // title: 'Co-Founder',
    avatar: 'liam.jpg',
    href: 'https://twitter.com/liamihorne',
  },
  {
    name: 'Josh Stark',
    // title: 'Co-Founder',
    avatar: 'josh.jpg',
    href: 'https://twitter.com/TheOfficialBale',
  },
  {
    name: 'Jacob Willemsma',
    // title: 'Director',
    avatar: 'jacob.jpg',
    href: 'https://twitter.com/jacob_willemsma',
  },
  {
    name: 'Andrew Dunscomb',
    // title: 'Director',
    avatar: 'andrew.jpeg',
    href: 'https://twitter.com/ajd36',
  },
  {
    name: 'Heather Davidson',
    // title: 'Director',
    avatar: 'heather.jpg',
    href: 'https://twitter.com/heather_claire',
  },
];

const Team = props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="Team" {...props} background={theme.color.blue.light}>
        <Container>
          <h2 style={{ textAlign: 'center' }}>Team</h2>
          <center>
            <p>ETHGlobal is a community initiative, made possible by the incredible Ethereum communities in cities all over the world. ❤️</p>
            <br></br>
            <p>Our core operational team includes:</p>
          </center>
          <Grid>
            {TEAM.map(({ name, title, avatar, href }) => {
              const avatarImg = data.allFile.edges.find(
                ({ node }) => node.relativePath === avatar
              ).node;

              return (
                <StyledLink href={href}>
                  <Avatar fluid={avatarImg.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{title}</Subtitle>
                </StyledLink>
              );
            })}
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  grid-gap: 40px;
  justify-content: center;
`;

const StyledLink = styled(ExternalLink)`
  &:hover {
    text-decoration: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled(Img)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.xsmall};
  line-height: 24px;
  font-weight: bold;
  color: ${props => props.theme.color.blue_dark.regular};
`;

const Subtitle = styled.div`
  ${props => props.theme.font_size.xxsmall};
  color: ${props => props.theme.color.blue_dark.alt_light};
`;

export default Team;
