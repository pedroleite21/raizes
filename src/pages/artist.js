import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IconMarker from '@material-ui/icons/Place';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

export default function Artist() {
  return (
    <div>
      <SEO pageTitle="Gabz - Rio de Janeiro" />
      <Header
        subHeader={
          <>
            <div>
              <Typography variant="h4" component="h1" color="primary">
                Detalhes do artista
              </Typography>
            </div>
            <IconMarker fontSize="large" color="primary" />
          </>
        }
      />
      <Layout
        css={{
          display: 'flex',
          margin: '0 auto',
          maxWidth: 560,
          padding: '200px 16px 32px',
          width: '100%',
        }}
      ></Layout>
    </div>
  );
}
