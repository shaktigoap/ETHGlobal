import React from 'react';
import styled from 'styled-components';

import ExternalLink from 'common/ExternalLink';

import { ReactComponent as GithubIcon } from 'static/icons/Github.svg';
import { ReactComponent as MediumIcon } from 'static/icons/Medium.svg';
import { ReactComponent as TwitterIcon } from 'static/icons/Twitter.svg';

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/ethglobal',
  },
  {
    name: 'Medium',
    icon: MediumIcon,
    href: 'https://medium.com/ethglobal',
  },
  {
    name: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/ethglobal',
  },
];

const SocialIcons = ({ white, ...other }) => (
  <Icons white={white} {...other}>
    {SOCIAL_LINKS.map(({ name, icon, href }) => (
      <ExternalLink key={name} href={href}>
        {icon()}
      </ExternalLink>
    ))}
  </Icons>
);

const Icons = styled.div`
  display: flex;
  margin-bottom: 8px;

  svg {
    margin: 0 12px;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }

    path {
      ${props => props.white && `fill: #fff`};
    }
  }
`;

export default SocialIcons;
