import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

import { Section, Container } from 'components/global';
import ExternalLink from 'common/ExternalLink';

const TEAM = [
  {
    name: 'Christian Bale',
    title: 'Software Engineer',
    href: 'https://twitter.com/TheOfficialBale',
    avatar: 'https://twitter-avatar.now.sh/TheOfficialBale',
  },
  {
    name: 'Batman',
    title: 'Software Engineer',
    href: 'https://twitter.com/TheOfficialBale',
    avatar: 'https://twitter-avatar.now.sh/TheOfficialBale',
  },
];

const Team = props => (
  <Section id="Team" {...props} background={theme.color.blue.xlight}>
    <Container>
      <h2 style={{ textAlign: 'center' }}>Team</h2>
      <Grid>
        {TEAM.map(({ name, title, href, avatar }) => (
          <StyledLink href={href}>
            <Avatar src={avatar} alt={name} />
            <Title>{name}</Title>
            <Subtitle>{title}</Subtitle>
          </StyledLink>
        ))}
      </Grid>
    </Container>
  </Section>
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

const Avatar = styled.img`
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
  color: ${props => props.theme.color.blue_dark.light};
`;

export default Team;
