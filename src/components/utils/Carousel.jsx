import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Box } from '@mui/material';

const Carousel = ({ slides }) => {
  return (
    <Box width="50%" height="500px">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide slide={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

const Slide = ({ slide }) => {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{ background: `url(${slide}) center/contain no-repeat` }}
    />
  );
};

export default Carousel;
