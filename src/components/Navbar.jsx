import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../assets/icons/logo.svg';
import { useMyTheme } from '../hooks/Palette';
import { StyledText, StyledButton, StyledIcon } from './utils/StyledComponent';

const Navbar = () => {
  const { myTheme, myFont } = useMyTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={myFont.buttonSize === 'small' ? '0 2%' : '0 1%'}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        sx={{ position: 'fixed', width: '100%', zIndex: 2 }}
        bgcolor="background.paper"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <ReactSVG
            src={logo}
            beforeInjection={svg =>
              svg.setAttribute(
                'style',
                'max-width: 80px; width: 100%; height: 100%'
              )
            }
          />
          <StyledText value="Axolote Web" variant="h2" />
        </Box>
        {myFont.buttonSize === 'small' ? (
          <MyMenu />
        ) : (
          <Box display="flex" gap="10px">
            {/* <StyledButton value="Iniciar Sesión" variant="text" icon="user" /> */}
            <StyledButton value="Contáctanos" href="#Contact" />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

const MyMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <StyledIcon
        icon="menu"
        color="text.primary"
        onClick={() => setOpenDrawer(true)}
      />
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ListDrawer setOpenDrawer={setOpenDrawer} />
      </Drawer>
    </>
  );
};

const ListDrawer = ({ setOpenDrawer }) => {
  const menuItems = [
    { text: 'Inicio', icon: 'home', href: '#' },
    { text: 'Contáctanos', icon: 'email', href: '#Contact' },
  ];

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <ReactSVG
          src={logo}
          beforeInjection={svg =>
            svg.setAttribute(
              'style',
              'max-width: 80px; width: 100%; height: 100%'
            )
          }
        />
      </Box>
      <List>
        <Divider />
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton href={item.href}>
                <ListItemIcon>
                  <StyledIcon icon={item.icon} color="text.primary" />
                </ListItemIcon>
                <StyledText value={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
      <Box display="grid" gap={2} p={2}>
        {/* <StyledButton value="Iniciar Sesión" variant="outlined" /> */}
        <StyledButton value="Contáctanos" href="#Contact" />
      </Box>
    </Box>
  );
};

export default Navbar;
