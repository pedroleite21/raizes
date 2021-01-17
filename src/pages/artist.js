import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

// Images import
import image1c from '../assets/images/carousel/1.png';

export default function Artist() {
  return (
    <div>
      <SEO pageTitle="Gabz - Rio de Janeiro" />
      <Header
        subHeader={
          <>
            <Layout
              css={{
                display: 'flex',
                margin: '0 auto',
                maxWidth: 560,
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Grid>
                <img css={{ width: '80%', height: '80%', paddingLeft: '20%' }} src={image1c} />
              </Grid>
              <Grid>
                <Typography component="h1" variant="h5" color="primary">
                  Gabz
                </Typography>
              </Grid>
              <Grid>
                <Link href="#" onClick={() => {}} variant="body2" css={{ color: '#2F80ED' }}>
                  Ver perfil completo
                </Link>
              </Grid>
            </Layout>
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
