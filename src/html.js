import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {!isMobile && (
          <>
            <div vw="true" className="enabled">
              <div vw-access-button="true" className="active"></div>
              <div vw-plugin-wrapper="true">
                <div className="vw-plugin-top-wrapper"></div>
              </div>
            </div>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "new window.VLibras.Widget('https://vlibras.gov.br/app');",
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
