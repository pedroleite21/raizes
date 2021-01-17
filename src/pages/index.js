import * as React from 'react';
import { position } from 'polished';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Map from '../components/map';
import useGeolocation from '../utils/useGeolocation';
import SEO from '../components/seo';
import SearchBox from '../components/search_box';
import { withStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby';

const MapDiv = styled.div({
  ...position('absolute', 0),
  zIndex: 0,
});

const positionCss = {
  left: '50%',
  maxWidth: 480,
  padding: '0 16px',
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: '100%',
  zIndex: 1,
};

export default function Home() {
  const coordinates = useGeolocation();

  const nextPage = () => {
    navigate('/place');
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#E0A31B'),
      backgroundColor: '#E0A31B',
      '&:hover': {
        backgroundColor: '#F5D08E',
      },
    },
  }))(Button);

  return (
    <>
      <SEO pageTitle="Escolha uma cidade" />
      <MapDiv>
        <Map
          coordinates={coordinates}
          onMarkerClick={() => console.log('vai pra página')}
        />
      </MapDiv>
      <SearchBox css={{ ...positionCss, top: 48 }} />
      <ColorButton
        onClick={nextPage}
        variant="contained"
        color="secondary"
        css={{
          ...positionCss,
          bottom: 48,
          backgroundColor: '#E0A31B',
        }}
      >
        Confirmar local
      </ColorButton>
    </>
  );
}
