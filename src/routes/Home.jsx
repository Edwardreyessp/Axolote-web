import { Stack, ThemeProvider } from '@mui/material';
import Banner from '../components/utils/Banner';
import Main from '../components/home/Main';
import Navbar from '../components/Navbar';
import { useMyTheme } from '../hooks/Palette';
import Footer from '../components/home/Footer';
import ContactForm from '../components/utils/ContactForm';
import catalogo from '../assets/images/catalogo.png';
import interactions from '../assets/images/interactions.png';
import plantillas from '../assets/images/plantillas.png';
import soporte from '../assets/images/soporte.png';
import phone from '../assets/images/phone.png';

const Home = () => {
  const { myTheme } = useMyTheme();
  const style = {
    maxWidth: '100%',
    maxHeight: '100%',
    filter: 'contrast(100%)',
  };
  const banners = [
    {
      titleBanner: '!Una gran oportunidad para hacer crecer tu negocio!',
      title: 'Muestra tus productos',
      desc: 'Coloca todo tu catálogo para que tus clientes vean toda la variedad de productos que tienes para ofrecerles',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'secondary',
      children: <img src={catalogo} alt="Catálogo" style={style} />,
    },
    {
      title: 'Agrega interacciones con tus clientes',
      desc: 'Agregar interacciones a tu página web, como formularios de Footero, chats en vivo y redes sociales integradas, para que puedas conectarte con tus clientes de una manera amigable y efectiva.',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'primary',
      children: <img src={interactions} alt="Interacciones" style={style} />,
    },
    {
      title: '¿Necesitas inspiración para iniciar tu diseño?',
      desc: 'Te proporcionamos algunas plantillas con las cuales podrás empezar para después personalizarlo a tu estilo. Dale tu propio toque y transmite a tus clientes esa vibra única.',
      button: {
        title: 'Ver plantillas',
        href: 'https://www.instagram.com/axoloteweb/',
      },
      type: 'secondary',
      children: <img src={plantillas} alt="Plantillas" style={style} />,
    },
    {
      title: 'Soporte de tu página web',
      desc: 'Ya sea que necesites ayuda para solucionar un problema o simplemente tengas una pregunta, nuestro equipo de soporte técnico está a tu disposición para ayudarte en cada paso del camino. Con nuestro servicio puedes estar seguro de que siempre tendrás el apoyo que necesitas para mantener tu sitio web funcionando sin problemas.',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'primary',
      children: <img src={soporte} alt="Soporte" style={style} />,
    },
    {
      title: 'Diseño responsivo',
      desc: 'Tu página web se adaptará a cualquier dispositivo, ya sea un celular, tablet o computadora de escritorio. Así que no te preocupes por la compatibilidad de tu sitio web, nosotros nos encargamos de eso.',
      button: { title: 'Contáctanos', href: '#Contact' },
      type: 'secondary',
      children: <img src={phone} alt="Responsive" style={style} />,
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
