import * as React from 'react';
import { position } from 'polished';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from '../components/header';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconPlace from '@material-ui/icons/Place';
import styled from '@emotion/styled';
import Carousel from '../components/carousel';
import Layout from '../components/layout';
import SearchBox from '../components/search_box';
import ImageGrid from '../components/image_grid';
import { navigate } from 'gatsby';

// Carousel images

import image1c from '../assets/images/carousel/1.png';
import image12 from '../assets/images/carousel/2.png';
import image3c from '../assets/images/carousel/3.png';
import image4 from '../assets/images/carousel/4.png';
import image2c from '../assets/images/carousel/2-1.png';
import image22 from '../assets/images/carousel/2-2.png';
import image23 from '../assets/images/carousel/2-3.png';
import image24 from '../assets/images/carousel/2-4.png';
import image31 from '../assets/images/carousel/3-1.png';
import image32 from '../assets/images/carousel/3-2.png';

import image1 from '../assets/centro-historico-rio-pequena-africa.jpg';
import image2 from '../assets/pequena-africa-1-2.jpg';
import image3 from '../assets/pequena-africa-3.jpg';

const imageSrcCss = {
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  height: 140,
  width: '100%',
};

const content = [image1, image2c, image3c, image1].map((v) => (
  <span css={imageSrcCss} style={{ backgroundImage: `url(${v})` }} />
));

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
  const [history, setHistory] = React.useState(true);

  const handleChange = (event, newValue) => {
    if (history) setHistory(false);
    setValue(newValue);
  };

  const dataMusic = [ image1c, image12, image3, image4 ];
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
          {!history ? (
            <>
              <SearchBox
                css={{ width: '100%' }}
                placeholder="Encontre um local"
              />
              <ImageGrid onItemClick={() => setHistory(true)} />
            </>
          ) : (
            <>
              <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="center"
              >
                <Grid>
                  <Typography component="span" variant="h6" color="primary">
                    Rio de Janeiro
                  </Typography>
                </Grid>
                <Grid>
                  <IconPlace fontSize="large" color="primary" />
                </Grid>
              </Grid>
              <Grid container item spacing={1}>
                <Typography component="h2" variant="h5" gutterBottom>
                  Pequena África
                </Typography>
              </Grid>
              <Carousel title="Fotos" data={content} />
              <p>
                Descoberta recentemente com obras para o Porto Maravilha, a
                Pequena África traz a enorme herança africana deixada ao Brasil
                depois de tanto sofrimento e opressão. Não muito conhecida por
                cariocas e turistas, são os bairros da Saúde, Gamboa e Santo
                Cristo, ambos na região do Centro, que abrigam os monumentos.
                Este artigo possui o objetivo de ressaltar a importância da
                história negra para o Rio de Janeiro. Inclusive, foi em um dos
                pontos da Pequena África que o samba começou a ser construído.
                Atente-se às informações!
              </p>
              <Typography variant="h6" component="span">
                Origem
              </Typography>
              <p>
                Até meados do século XVIII, os escravos eram desembarcados no
                Porto da Praça XV, Centro, local que endereça o Paço Imperial.
                Porém, a alta sociedade carioca que frequentava o local começou
                a se incomodar com a presença dos escravos. Com medo de pegar
                doenças com o tráfico explícito de pessoas, essa atividade foi
                transferida para o Valongo, antes da urbanização chegar.
              </p>
              <p>
                Agora Cais do Valongo, os escravos que morriam antes de
                aportarem eram jogados no que hoje é reconhecido como Cemitério
                dos Pretos Novos. Os que sobreviviam iam para as Casas de
                Engorda para que pudessem ser preparados para o Mercado de
                Escravos.
              </p>
              <Typography variant="h6" component="span">
                Importância
              </Typography>
              <p>
                De origem pesada, a Pequena África é o local onde se localizam
                as principais marcas deixadas pela história dos negros no Rio de
                Janeiro. Hoje, ganhando reconhecimento de forma gradativa, o
                passeio proporciona reflexões às pautas que estão em voga até a
                atualidade.
              </p>
              <p>
                Do comércio ilegal de escravos, passando por aqueles que
                chegaram da Bahia construindo casas simples, templos e espaços
                artísticos, a identidade cultural firmou-se. Mesmo com a
                tentativa de maquiar a nível europeu pela elite, a cidade, hoje,
                tenta recuperar o que por muitos anos foi apagado. A cultura
                negra carioca.
              </p>
            </>
          )}
        </TabPanel>
      </Layout>
    </div>
  );
}
