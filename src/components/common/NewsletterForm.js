import React from 'react';
import styled from 'styled-components';

import { Card, Input, Button } from 'components/global';

import MailBoxArt from 'static/Mailbox.svg';

const NewsLetterForm = props => (
  <Card {...props}>
    <Centered>
      <img src={MailBoxArt} alt="Mailbox" />
      <h3>Get in sync</h3>
      <p>
        Sign up for our mailing list to get the latest updates about ETHGlobal
        events.
      </p>
    </Centered>
    <Form>
      <Input type="text" placeholder="Your email" />
      <Button>Submit</Button>
    </Form>
  </Card>
);

const Centered = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  img {
    margin-bottom: 24px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

const Form = styled.form`
  display: flex;

  ${Input} {
    flex: 2;
    margin-right: 16px;
  }

  ${Button} {
    flex: 1;
  }

  @media (max-width: 767) {
    flex-direction: column;
  }
`;

export default NewsLetterForm;
