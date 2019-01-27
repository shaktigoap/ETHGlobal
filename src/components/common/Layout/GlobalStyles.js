import { createGlobalStyle } from 'styled-components';
import { FONT, FONT_SIZE, COLOR } from 'constants';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    font-family: ${FONT.secondary};
    ${FONT_SIZE.regular};
    color: ${COLOR.blue_dark.regular}
  }

  h1, h2, h3, h4 {
    font-family: ${FONT.primary};
    color: ${COLOR.blue_dark.regular};
    font-weight: 700;
    margin: 0;
  }

  h1 {
    ${FONT_SIZE.xxlarge};
  }
  h2 {
    ${FONT_SIZE.xlarge};
  }
  h3 {
    ${FONT_SIZE.large};
  }
  h4 {
    ${FONT_SIZE.small};
  }

  a {
    text-decoration: none;
    color: ${COLOR.blue.regular};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
