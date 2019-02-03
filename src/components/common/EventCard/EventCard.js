import React from 'react';
import Img from 'gatsby-image';

import { Pill } from 'components/global';

import {
  CardContainer,
  Cover,
  CardContent,
  Avatar,
  Subtitle,
  ApplyButton,
  LinkWrapper,
} from './style';

const EventCard = ({
  primaryColor,
  avatar,
  title,
  location,
  dates,
  href,
  inactive,
  ...other
}) => (
  <LinkWrapper href={href}>
    <CardContainer inactive={inactive} data-tip={href} {...other}>
      <Cover color={primaryColor} />
      <CardContent>
        <Avatar as={Img} fluid={avatar} alt={title + 'logo'} />
        <h3>{title}</h3>
        <Subtitle>{location}</Subtitle>
        <Pill stretch appearance={inactive ? 'secondary' : 'primary'}>
          {dates}
        </Pill>
        <ApplyButton stretch small>
          Apply Now
        </ApplyButton>
      </CardContent>
    </CardContainer>
  </LinkWrapper>
);

export default EventCard;
