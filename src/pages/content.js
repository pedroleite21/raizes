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
          <Carousel title="Música" />
          <Carousel title="Artistas Visuais" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchBox css={{ width: '100%' }} />
          <ImageGrid />
        </TabPanel>
      </Layout>
    </div>
  );
}
