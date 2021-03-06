import * as React from 'react';
import styled from '@emotion/styled';
import { position } from 'polished';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import historyImage from '../assets/history.jpg';
import jdImage4 from '../assets/jardim-suspenso.png';
import peqAfrica2 from '../assets/peq-africa2.png';
import cemPretosNovos from '../assets/cem-pretos-novos.png';

const data = [
  'Pequena África',
  'Pedra do Sal',
  'Jardins Suspensos',
  'Cemitério dos Pretos Novos',
];

const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
}));

const GridButton = styled(ButtonBase)({
  height: 150,
  position: 'relative',

  '&:hover > .backdrop, &:focus > .backdrop': {
    opacity: 0.15,
  },
});

const imageSrcCss = {
  ...position('absolute', 0),
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
};

const backdropCss = {
  ...position('absolute', 0),
  backgroundColor: '#212121',
  opacity: 0.5,
  transition: 'opacity 150ms ease',
};

const imageButton = {
  ...position('absolute', 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

export default function ImageGrid({ onItemClick }) {
  const images = [peqAfrica2, historyImage, jdImage4, cemPretosNovos];
  return (
    <Grid>
      {data.map((v, index) => (
        <GridButton focusRipple key={v} onClick={onItemClick}>
          <span
            css={imageSrcCss}
            style={{
              backgroundImage: `url(${images[index]})`,
            }}
          />
          <span css={backdropCss} className="backdrop" />
          <span css={imageButton}>
            <Typography component="span" variant="subtitle1" color="inherit">
              {v}
            </Typography>
          </span>
        </GridButton>
      ))}
    </Grid>
  );
}
