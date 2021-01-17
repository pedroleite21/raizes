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
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CarouselItem = styled.div({
  alignItems: 'center',
  display: 'flex !important',
  height: 80,
  justifyContent: 'center',
  padding: '0 8px',
  width: '33.333%',
});

export default function Carousel({ data, title = 'Música', ...rest }) {
  return (
    <StyledDiv>
      <StyledTypography component="h2" variant="h6" color="primary">
        {title}
      </StyledTypography>
      <Slider {...settings}>
        <CarouselItem>
          <span>1</span>
        </CarouselItem>
        <CarouselItem>
          <span>2</span>
        </CarouselItem>
        <CarouselItem>
          <span>3</span>
        </CarouselItem>
        <CarouselItem>
          <span>4</span>
        </CarouselItem>
        <CarouselItem>
          <span>5</span>
        </CarouselItem>
        <CarouselItem>
          <span>6</span>
        </CarouselItem>
      </Slider>
    </StyledDiv>
  );
}
