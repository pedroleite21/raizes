import * as React from 'react';
import { position } from 'polished';
import styled from '@emotion/styled';
import Map from '../components/map';
import useGeolocation from '../utils/useGeolocation';
import Layout from '../components/layout';

const MapDiv = styled.div({
  ...position('absolute', 0),
});

export default function Home() {
  const coordinates = useGeolocation();

  return (
    <>
      <MapDiv>
        <Map coordinates={coordinates} onMarkerClick={() => console.log('vai pra página')} />
      </MapDiv>
      <Layout>
        <div>lets go</div>
      </Layout>
    </>
  );
}
