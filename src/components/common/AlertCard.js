import React from 'react';

import { Card, Pill } from 'components/global';

const ANNOUCEMENT = {
  title: 'Announcement',
  content:
    'Applications open for ETHDenver (Feb 15-17), ETHParis (Mar 8-10), and ETHCapeTown (Apr 19-21)!',
};

const AlertCard = props => (
  <Card small {...props}>
    <Pill appearance="alert">{ANNOUCEMENT.title}</Pill>
    <p style={{ fontWeight: 'bold', marginTop: 16 }}>{ANNOUCEMENT.content}</p>
  </Card>
);

export default AlertCard;
