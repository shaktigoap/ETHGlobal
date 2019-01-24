import React from 'react';

import { Pill } from 'components/global';
import { CardContainer, Cover, CardContent, Avatar, Subtitle } from './style';

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
  <CardContainer {...other}>
    <Cover color={primaryColor} />
    <CardContent>
      <Avatar color={primaryColor}>avatar</Avatar>
      <h3>{title}</h3>
      <Subtitle>{location}</Subtitle>
      <Pill stretch>{dates}</Pill>
    </CardContent>
  </CardContainer>
);

export default EventCard;
