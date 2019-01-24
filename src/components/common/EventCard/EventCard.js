import React from 'react';

import { Pill } from 'components/global';
import {
  CardContainer,
  Cover,
  CardContent,
  Avatar,
  Subtitle,
  ApplyButton,
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
  <CardContainer inactive={inactive} {...other}>
    <Cover color={primaryColor} />
    <CardContent>
      <Avatar color={primaryColor}>avatar</Avatar>
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
);

export default EventCard;
