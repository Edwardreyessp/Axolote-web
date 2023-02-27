import { Stack } from '@mui/material';
import Carousel from '../utils/Carousel';
import { StyledButton, StyledText } from '../utils/StyledComponent';
import logo from '../../assets/icons/logo.svg';

const Main = () => {
  const slides = [logo, logo, logo, logo];

  return (
    <Stack alignItems="center" gap={4} p={4}>
      <StyledText value="!Tu propia página web!" variant="h1" />
      <StyledText
        value="Te ayudamos a crear tu página web a tu estilo"
        variant="body1"
      />
      <StyledButton value="Crear" />
      <Carousel slides={slides} />
    </Stack>
  );
};

export default Main;
