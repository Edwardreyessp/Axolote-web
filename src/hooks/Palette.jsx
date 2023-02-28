import { useContext } from 'react';
import { createContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';

const themeContext = createContext();

export const useMyTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error('There is not theme provider');
  return context;
};

export const MyThemeProvider = ({ children }) => {
  const desktop = useMediaQuery(useTheme().breakpoints.up('md'));
  const tablet = useMediaQuery(useTheme().breakpoints.up('sm'));
  const mobile = useMediaQuery(useTheme().breakpoints.up('xs'));

  const getButtonSize = () => {
    if (desktop) return 'large';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  const getFontSize = () => {
    if (desktop) {
      return {
        h1: { fontSize: '48px', fontWeight: 700 },
        h2: { fontSize: '36px', fontWeight: 700 },
        h3: { fontSize: '24px', fontWeight: 700 },
        body1: { fontSize: '32px', fontWeight: 400 },
        body2: { fontSize: '20px', fontWeight: 400 },
        caption: { fontSize: '16px', fontWeight: 400 },
      };
    }
    if (tablet) {
      return {
        h1: { fontSize: '32px', fontWeight: 700 },
        h2: { fontSize: '24px', fontWeight: 700 },
        h3: { fontSize: '20px', fontWeight: 700 },
        body1: { fontSize: '20px', fontWeight: 400 },
        body2: { fontSize: '16px', fontWeight: 400 },
        caption: { fontSize: '12px', fontWeight: 400 },
      };
    }
    if (mobile) {
      return {
        h1: { fontSize: '24px', fontWeight: 700 },
        h2: { fontSize: '20px', fontWeight: 700 },
        h3: { fontSize: '16px', fontWeight: 700 },
        body1: { fontSize: '16px', fontWeight: 400 },
        body2: { fontSize: '14px', fontWeight: 400 },
        caption: { fontSize: '10px', fontWeight: 400 },
      };
    }
  };

  const myTheme = createTheme({
    palette: {
      primary: {
        light: 'rgba(33, 133, 213, 0.2)',
        main: '#2185D5',
        dark: '#0d6bb3',
        contrastText: '#F3F3F3',
      },
      secondary: {
        light: 'rgba(255, 188, 171, 0.2)',
        main: '#FFA5B5',
        dark: '#c97b8b',
        contrastText: '#F3F3F3',
      },
      background: {
        default: 'F3F3F3',
        paper: '#F3F3F3',
        primary: '#2185D5',
        secondary: '#FFBCAB',
        dark: '#303841',
      },
      text: {
        primary: '#3A4750',
        terceary: '#F3F3F3',
      },
    },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
      ...getFontSize(),
    },
  });

  const myFont = {
    icon: { lg: 30, xs: 20 },
    logo: { lg: 48, xs: 30 },
    buttonSize: getButtonSize(),
  };

  return (
    <themeContext.Provider value={{ myTheme, myFont }}>
      {children}
    </themeContext.Provider>
  );
};
