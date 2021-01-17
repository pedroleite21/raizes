import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import { makeStyles } from '@material-ui/core/styles';
import IconArrowUpward from '@material-ui/icons/ArrowUpward';

// Images import
import image1c from '../assets/images/carousel/1.png';
import image1 from '../assets/images/artist/1.png';
import image2 from '../assets/images/artist/2.png';
import image3 from '../assets/images/artist/3.png';
import image4 from '../assets/images/artist/4.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#E0A31B',
    },
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#474747',
    minHeight: '64px'
  },
  image: {
    paddingRight: '5px',
  /* width: '20%',
  height: '20%' */
  },
}));

export default function Artist() {
  const classes = useStyles();

  const artistData = [
    {
      image: <img className={classes.image} src={image1} />,
      title: 'O Baile é nosso',
      subtitle: '210,727 rep.',
      status: 'Em alta'
    },
    {
      image: <img className={classes.image} src={image2} />,
      title: 'Insegurança',
      subtitle: '1,446,507 rep.',
      status: 'Em alta'
    },
    {
      image: <img className={classes.image} src={image3} />,
      title: 'Noite de Verão',
      subtitle: '1,478,119 rep.',
      status: 'Em alta'
    },
    {
      image: <img className={classes.image} src={image4} />,
      title: 'PELE',
      subtitle: '157,779 rep.',
      status: undefined
    }
  ];

  return (
    <div>
      <SEO pageTitle="Gabz - Rio de Janeiro" />
      <Header
        subHeader={
          <>
            <div
              css={{
                display: 'flex',
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
            </div>
          </>
        }
      />
      <Layout
        css={{
          display: 'flex',
          margin: '0 auto',
          maxWidth: 560,
          padding: '400px 16px 32px',
          width: '100%',
        }}
      >
        <Grid
          container
          spacing={1}
          justify="space-between"
          alignItems="center"
        >
          {artistData.map(({ image, title, subtitle, status }) =>
            <Grid
              xs={12}
            >
            <Paper className={classes.paper}>
              <div css={{ display: 'flex', flexDirection: 'row' }}>
                {image}
                <div css={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div css={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <Typography css={{ color: '#fff' }}>
                      {title}
                    </Typography>
                    <Typography css={{ color: '#fff' }}>
                      {subtitle}
                    </Typography>
                  </div>
                  <Typography css={{ color: '#C8F4DC', textAlign: 'center' }}>
                    {status && (
                      <>
                        <IconArrowUpward fontSize="small" color="primary" style={{ marginBottom: '-5px', color: '#C8F4DC' }} />
                        {status}
                      </>
                    )}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          )}
        </Grid>
      </Layout>
    </div>
  );
}
