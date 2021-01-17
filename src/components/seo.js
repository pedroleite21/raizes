import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default function SEO({ pageTitle }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const { description, title } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-br',
      }}
      title={pageTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    />
  );
}
