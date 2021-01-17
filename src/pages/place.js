import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IconMarker from '@material-ui/icons/Place';
import Layout from '../components/layout';
import Header from '../components/header';

const content = [
  { label: 'Dias Atuais' },
  { label: '2010' },
  { label: '2000' },
  { label: '1990' },
  { label: '1980' },
  { label: '1970' },
  { label: '1960' },
  { label: '1950' },
  { label: '1940' },
  { label: '1930' },
];

export default function Place() {
  return (
    <div>
      <Header
        subHeader={
          <>
            <div>
              <Typography variant="h4" component="h1" color="primary">
                Lapa, Rio de Janeiro
              </Typography>
              <span>Navegue pela história daqui</span>
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
      >
        <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {content.map(({ label }, index) => (
            <div
              key={label}
              css={{
                borderRight: '2px solid #fff',
                borderRightColor: index === 0 && '#E0A31B',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '32px 16px',
              }}
            >
              <span>Conteúdo</span>
              <Typography
                variant="h6"
                component="span"
                color={index === 0 ? 'primary' : 'primaryText'}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
