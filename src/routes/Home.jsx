import { Box, ThemeProvider } from '@mui/material';
import Main from '../components/home/Main';
import Navbar from '../components/Navbar';
import { useMyTheme } from '../hooks/Palette';

const Home = () => {
  const { myTheme } = useMyTheme();
  return (
    <ThemeProvider theme={myTheme}>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
};

export default Home;
