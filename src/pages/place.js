import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IconMarker from '@material-ui/icons/Place';
import Layout from '../components/layout';
import Header from '../components/header';

// Content images
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';

const content = [
  { label: 'Dias Atuais', image: image1 },
  { label: '2010', image: image2 },
  { label: '2000', image: image3 },
  { label: '1990', image: image4 },
  { label: '1980', image: image5 },
  { label: '1970', image: image2 },
  { label: '1960', image: image3 },
  { label: '1950', image: image4 },
  { label: '1940', image: image5 },
  { label: '1930', image: image2 },
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
          {content.map(({ label, image }, index) => (
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
              <span><img src={image} alt="Logo" style={{ borderRadius: 10 }} /></span>
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
