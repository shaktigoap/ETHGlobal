import React from 'react';
import styled from 'styled-components';

import { Card, Pill } from 'components/global';

const ANNOUCEMENT = {
  title: 'Announcement',
  content:
    'Applications open for ETHCapeTown (Apr 19-21) and ETHNewYork (May 17-19)!',
};

const AlertCard = props => (
  <Card small {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledImg
        src="https://picsum.photos/200"
        alt="Annoucement"
        style={{ display: 'none' }}
      />
      <div>
        <Pill appearance="alert">{ANNOUCEMENT.title}</Pill>
        <p style={{ fontWeight: 'bold', marginTop: 16 }}>
          {ANNOUCEMENT.content}
        </p>
      </div>
    </div>
  </Card>
);

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default AlertCard;
