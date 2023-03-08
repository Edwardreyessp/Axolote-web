import Carousel from '../utils/Carousel';
import { Grid, Stack } from '@mui/material';
import logo from '../../assets/icons/logo.svg';
import { StyledButton, StyledText } from '../utils/StyledComponent';

const Main = () => {
  const slides = [logo, logo, logo, logo];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      pt="84px"
    >
      <Stack maxWidth="80%" alignItems="center" justifyContent="center" gap={4}>
        <StyledText value="!Tu propia página web!" variant="h1" />
        <StyledText
          value="Te ayudamos a crear tu página web a tu estilo"
          variant="body1"
        />
        <StyledButton value="Contáctanos" href="#Contact" />
      </Stack>
      <Grid
        container
        justifyContent="center"
        sx={{ width: '100%', height: '60%', py: 4 }}
      >
        <Grid item xs={10} sm={10} md={10} lg={8}>
          <Carousel slides={slides} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Main;
