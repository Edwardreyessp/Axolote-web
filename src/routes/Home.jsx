import { Stack, ThemeProvider } from '@mui/material';
import Banner from '../components/utils/Banner';
import Main from '../components/home/Main';
import Navbar from '../components/Navbar';
import { useMyTheme } from '../hooks/Palette';
import logo from '../assets/icons/logo.svg';
import Carousel from '../components/utils/Carousel';
import Footer from '../components/home/Footer';
import ContactForm from '../components/utils/ContactForm';

const Home = () => {
  const { myTheme } = useMyTheme();
  const banners = [
    {
      titleBanner: '!Una gran oportunidad para hacer crecer tu negocio!',
      title: 'Muestra tus prodcutos',
      desc: 'Coloca todo tu catálogo para que tus clientes vean toda la variedad de productos que tienes para ofrecerles',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'secondary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: 'Agrega interacciones con tus clientes',
      desc: 'Agregar interacciones a tu página web, como formularios de Footero, chats en vivo y redes sociales integradas, para que puedas conectarte con tus clientes de una manera amigable y efectiva.',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'primary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: '¿Necesitas inspiración para iniciar tu diseño?',
      desc: 'Te proporcionamos algunas plantillas con las cuales podrás empezar para después personalizarlo a tu estilo. Dale tu propio toque y transmite a tus clientes esa vibra única.',
      button: {
        title: 'Ver plantillas',
        href: 'https://www.instagram.com/axoloteweb/',
      },
      type: 'secondary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: 'Soporte de tu página web',
      desc: 'Ya sea que necesites ayuda para solucionar un problema o simplemente tengas una pregunta, nuestro equipo de soporte técnico está a tu disposición para ayudarte en cada paso del camino. Con nuestro servicio puedes estar seguro de que siempre tendrás el apoyo que necesitas para mantener tu sitio web funcionando sin problemas.',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'primary',
      children: <Carousel slides={[logo, logo, logo, logo]} />,
    },
    {
      title: '¿Necesitas inspiración para iniciar tu diseño?',
      desc: 'Te proporcionamos algunas plantillas con las cuales podrás empezar para después personalizarlo a tu estilo. Dale tu propio toque y transmite a tus clientes esa vibra única.',
      button: {
        title: 'Ver plantillas',
        href: 'https://www.instagram.com/axoloteweb/',
      },
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
        <ContactForm />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
