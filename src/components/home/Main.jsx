import Carousel from '../utils/Carousel';
import { Grid, Stack } from '@mui/material';
import logo from '../../assets/icons/logo.svg';
import { StyledButton, StyledText } from '../utils/StyledComponent';
import catalogo from '../../assets/images/catalogo.png';
import interactions from '../../assets/images/interactions.png';
import plantillas from '../../assets/images/plantillas.png';
import soporte from '../../assets/images/soporte.png';
import phone from '../../assets/images/phone.png';

const Main = () => {
  const slides = [
    'Crea tu catálogo de productos y servicios de manera fácil y rápida',
    'Interacciona con tus clientes y usuarios de tu página web de manera fácil y rápida',
    'Elige tu plantilla favorita y personalízala a tu gusto y estilo',
    'Contamos con soporte técnico',
    'Diseño responsivo para móviles, tablets, PC y más',
  ];

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
