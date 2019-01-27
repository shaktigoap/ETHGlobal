import React from 'react';

import { Card, Pill } from 'components/global';

const AlertCard = ({ title, content, ...other }) => (
  <Card small {...other}>
    <Pill appearance="alert">{title}</Pill>
    <p style={{ fontWeight: 'bold', marginTop: 16 }}>{content}</p>
  </Card>
);

export default AlertCard;
