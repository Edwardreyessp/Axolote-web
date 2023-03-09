import 'swiper/css';
import './styles.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { StyledText } from './StyledComponent';
import logo from '../../assets/icons/biglogo.svg';
import { useMyTheme } from '../../hooks/Palette';

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
  const { myFont } = useMyTheme();

  return (
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      sx={{ background: `url(${logo}) center/contain no-repeat content-box` }}
    >
      <Stack
        bgcolor="rgba(243, 243, 243, 0.8)"
        width="100%"
        p={myFont.buttonSize === 'small' ? 6 : 4}
      >
        <StyledText align="center" value={slide} variant="h1" />
      </Stack>
    </Stack>
  );
};

export default Carousel;
