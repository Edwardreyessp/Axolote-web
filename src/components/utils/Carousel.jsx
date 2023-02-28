import 'swiper/css';
import './styles.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const Carousel = ({ slides }) => {
  return (
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
