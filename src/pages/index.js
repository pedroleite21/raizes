import * as React from 'react';
import { position } from 'polished';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Map from '../components/map';
import useGeolocation from '../utils/useGeolocation';
import SearchBox from '../components/search_box';

const MapDiv = styled.div({
  ...position('absolute', 0),
  zIndex: 0,
});

const positionCss = {
  left: '50%',
  maxWidth: 480,
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: '100%',
  zIndex: 1,
};

export default function Home() {
  const coordinates = useGeolocation();

  return (
    <>
      <MapDiv>
        <Map coordinates={coordinates} onMarkerClick={() => console.log('vai pra página')} />
      </MapDiv>
      <SearchBox css={{ ...positionCss, top: 48 }} />
      <Button variant="contained" color="secondary" css={{ ...positionCss, bottom: 48 }}>
        Confirmar local
      </Button>
    </>
  );
}
