import * as React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const StyledDiv = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const CarouselItem = styled.div({
  alignItems: 'center',
  display: 'flex !important',
  justifyContent: 'center',
  padding: '8px',
  position: 'relative',
  width: '100%',
});

export default function Carousel({ data, title = 'Música', onClick, imageStyle, ...rest }) {
  return (
    <StyledDiv>
      <StyledTypography component="h2" variant="h6" color="primary">
        {title}
      </StyledTypography>
      <Slider {...settings}>
        {data.map((v, index) => (
          <CarouselItem key={`carousel-item-${index}`}>
            <div role="button" css={{ cursor: 'pointer' }} onClick={onClick}>
              <img css={{ width: '100%', height: '100%', ...imageStyle }} src={v} />
            </div>
          </CarouselItem>
        ))}
      </Slider>
    </StyledDiv>
  );
}