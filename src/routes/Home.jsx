import { Stack, ThemeProvider } from '@mui/material';
import Banner from '../components/utils/Banner';
import Main from '../components/home/Main';
import Navbar from '../components/Navbar';
import { useMyTheme } from '../hooks/Palette';
import logo from '../assets/icons/logo.svg';
import Carousel from '../components/utils/Carousel';
import Footer from '../components/home/Footer';

const Home = () => {
  const { myTheme } = useMyTheme();
  const banners = [
    {
      titleBanner: '!Una gran oportunidad para hacer crecer tu negocio!',
      title: 'Muestra tus prodcutos',
      desc: 'Coloca todo tu catálogo para que tus clientes vean toda la variedad de productos que tienes para ofrecerles',
      button: 'Crear Catálogo',
      type: 'secondary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: 'Agrega interacciones con tus clientes',
      desc: 'Agregar interacciones a tu página web, como formularios de Footero, chats en vivo y redes sociales integradas, para que puedas conectarte con tus clientes de una manera amigable y efectiva.',
      button: 'Agregar interacciones',
      type: 'primary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: '¿Necesitas inspiración para iniciar tu diseño?',
      desc: 'Te proporcionamos algunas plantillas con las cuales podrás empezar para después personalizarlo a tu estilo. Dale tu propio toque y transmite a tus clientes esa vibra única.',
      button: 'Ver plantillas',
      type: 'secondary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
  ];

  return (
    <ThemeProvider theme={myTheme}>
      <Navbar />
      <Stack width="100vw" maxWidth="100%">
        <Main />
        {banners.map((banner, index) => {
          return <Banner key={index} banner={banner} />;
        })}
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
