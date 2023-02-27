import { useMyTheme } from '../../hooks/Palette';
import { Button, IconButton, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export const StyledText = ({ variant, value, color }) => {
  const { myFont } = useMyTheme();

  return (
    <Typography
      variant={variant}
      color={color || 'text.primary'}
      textAlign={myFont.buttonSize === 'small' && 'center'}
    >
      {value}
    </Typography>
  );
};

export const StyledButton = ({ variant, value, color, onClick, icon }) => {
  const { myFont } = useMyTheme();

  const getIcon = () => {
    if (icon === 'user') return <AccountCircleOutlinedIcon />;
  };

  return (
    <Button
      variant={variant || 'contained'}
      color={color || 'primary'}
      onClick={onClick}
      startIcon={getIcon()}
      size={myFont.buttonSize}
    >
      {value}
    </Button>
  );
};

export const StyledIcon = ({ color, onClick, icon }) => {
  const { myFont } = useMyTheme();

  const style = {
    size: myFont.buttonSize,
    color: color || 'primary.contrastText',
    cursor: 'pointer',
  };

  const getIcon = () => {
    if (icon === 'user') return <AccountCircleOutlinedIcon sx={style} />;
    if (icon === 'menu') return <MenuRoundedIcon sx={style} />;
    if (icon === 'home') return <HomeRoundedIcon sx={style} />;
    if (icon === 'email') return <EmailRoundedIcon sx={style} />;
  };

  if (onClick) {
    return <IconButton onClick={onClick}>{getIcon()}</IconButton>;
  }

  return getIcon();
};
