import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from '../components/header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from '@emotion/styled';
import Carousel from '../components/carousel';
import Layout from '../components/layout';
import SearchBox from '../components/search_box';
import ImageGrid from '../components/image_grid';
import { navigate } from 'gatsby';

// Carousel images

import image1 from '../assets/images/carousel/1.png';
import image12 from '../assets/images/carousel/2.png';
import image3 from '../assets/images/carousel/3.png';
import image4 from '../assets/images/carousel/4.png';
import image2 from '../assets/images/carousel/2-1.png';
import image22 from '../assets/images/carousel/2-2.png';
import image23 from '../assets/images/carousel/2-3.png';
import image24 from '../assets/images/carousel/2-4.png';
import image31 from '../assets/images/carousel/3-1.png';
import image32 from '../assets/images/carousel/3-2.png';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}px`,
}));

const contentCss = {
  width: '100%',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      css={contentCss}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Content() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dataMusic = [ image1, image12, image3, image4 ];
  const dataVisualArtist = [ image2, image22, image23, image24];
  const dataPodcast = [ image31, image32, image31, image32 ];

  return (
    <div>
      <Header
        subHeader={
          <Typography component="h1" variant="h5" color="primary">
            Dias atuais
          </Typography>
        }
        tabs={
          <StyledTabs
            aria-label="conteudo/historia"
            centered
            indicatorColor="primary"
            onChange={handleChange}
            value={value}
          >
            <Tab label="Conteúdo" {...a11yProps(0)} />
            <Tab label="História daqui" {...a11yProps(1)} />
          </StyledTabs>
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
        <TabPanel value={value} index={0}>
          <SearchBox
            css={{ width: '100%' }}
            placeholder="Procure um conteúdo"
          />
          <Carousel title="Música" data={dataMusic} onClick={() => navigate('/artist')} />
          <Carousel title="Artistas Visuais" data={dataVisualArtist} onClick={() => navigate('/artist')} />
          <Carousel title="Podcast" data={dataPodcast} onClick={() => navigate('/artist')} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchBox css={{ width: '100%' }} />
          <ImageGrid />
        </TabPanel>
      </Layout>
    </div>
  );
}
