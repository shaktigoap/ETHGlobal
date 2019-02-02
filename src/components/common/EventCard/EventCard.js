import React from 'react';

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
  icon,
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
        <Avatar color={primaryColor}>
          <img src={icon} alt={title + 'logo'} />
        </Avatar>
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
