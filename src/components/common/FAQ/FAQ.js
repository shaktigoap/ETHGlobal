import React from 'react';
import Collapsible from 'react-collapsible';

import { Wrapper } from './style';

const FAQ = ({ title, content }) => (
  <Wrapper>
    <Collapsible
      className="faq"
      openedClassName="faq active"
      triggerClassName="faq-title"
      triggerOpenedClassName="faq-title active"
      triggerTagName="button"
      contentInnerClassName="faq-content"
      trigger={title}
      transitionTime={300}
      easing="ease-out"
    >
      {content}
    </Collapsible>
  </Wrapper>
);

export default FAQ;
