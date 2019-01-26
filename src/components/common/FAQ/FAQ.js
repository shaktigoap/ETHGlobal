import React from 'react';
import Collapsible from 'react-collapsible';

import { Wrapper } from './style';

const FAQ = () => (
  <Wrapper>
    <Collapsible
      className="faq"
      openedClassName="faq active"
      triggerClassName="faq-title"
      triggerOpenedClassName="faq-title active"
      triggerTagName="button"
      contentInnerClassName="faq-content"
      trigger="Start here"
      transitionTime={300}
      easing="ease-out"
    >
      This is the collapsible content. It can be any element or React component
      you like. It can even be another Collapsible component. Check out the next
      section!
    </Collapsible>
  </Wrapper>
);

export default FAQ;
