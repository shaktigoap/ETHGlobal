import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import theme from '../../theme';

import { Section, Container } from 'components/global';
import ExternalLink from 'common/ExternalLink';

// To add a team member:
// - Add details to the array below
// - Add his profile image to src/images/team
// - Make sure it is named as per his 'name' field
//   Lowercase, spaces replaced with underscores
//   ex: Christian Bale -> christian_bale
const TEAM = [
  {
    name: 'Christian Bale',
    title: 'Software Engineer',
    href: 'https://twitter.com/TheOfficialBale',
  },
  {
    name: 'Batman',
    title: 'Chief Scientist',
    href: 'https://twitter.com/TheOfficialBale',
  },
  {
    name: 'Christian Bale',
    title: 'Chief Scientist',
    href: 'https://twitter.com/TheOfficialBale',
  },
  {
    name: 'Batman',
    title: 'Software Engineer',
    href: 'https://twitter.com/TheOfficialBale',
  },
];

const Team = props => (
  <StaticQuery
    query={graphql`
      fragment squareImage on File {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              name
              ...squareImage
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="Team" {...props} background={theme.color.blue_dark.xlight}>
        <Container>
          <h2 style={{ textAlign: 'center' }}>Team</h2>
          <Grid>
            {TEAM.map(({ name, title, href }) => {
              const avatarImg = data.allFile.edges.find(
                ({ node }) => node.name === name.replace(' ', '_').toLowerCase()
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
