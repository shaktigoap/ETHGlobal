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
    <Form
      action={`https://ethwaterloo.us16.list-manage.com/subscribe/post?u=98a76c70b9cb90ca3268618a3&amp;id=4f4e5f85ff`}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      novalidate
    >
      <Input
        placeholder="Your email"
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        required
      />
      <Button type="submit" name="subscribe" id="mc-embedded-subscribe">
        Subscribe
      </Button>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_98a76c70b9cb90ca3268618a3_4f4e5f85ff"
          tabIndex="-1"
          value=""
        />
      </div>
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
    margin-bottom: 16px;
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

  > * {
    margin-top: 16px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default NewsLetterForm;
