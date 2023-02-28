import { ReactSVG } from 'react-svg';
import { useMyTheme } from '../../hooks/Palette';
import tiktok from '../../assets/icons/tiktok.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const StyledText = ({ variant, value, color, align, weight }) => {
  const { myFont } = useMyTheme();

  return (
    <Typography
      variant={variant}
      color={color || 'text.primary'}
      textAlign={align || (myFont.buttonSize !== 'large' && 'center')}
      sx={{ fontWeight: weight }}
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
  const { myFont, myTheme } = useMyTheme();

  const style = {
    fontSize: myFont.buttonSize,
    color: color || 'primary.contrastText',
    cursor: 'pointer',
  };

  const svgStyle = () => {
    if (myFont.buttonSize === 'large') return { width: '18px', height: '18px' };
    if (myFont.buttonSize === 'medium')
      return { width: '16px', height: '16px' };
    if (myFont.buttonSize === 'small') return { width: '14px', height: '14px' };
  };

  const getIcon = () => {
    if (icon === 'user') return <AccountCircleOutlinedIcon sx={style} />;
    if (icon === 'menu') return <MenuRoundedIcon sx={style} />;
    if (icon === 'home') return <HomeRoundedIcon sx={style} />;
    if (icon === 'email') return <EmailRoundedIcon sx={style} />;
    if (icon === 'Facebook') return <FacebookOutlinedIcon sx={style} />;
    if (icon === 'Instagram') return <InstagramIcon sx={style} />;
    if (icon === 'Twitter') return <TwitterIcon sx={style} />;
    if (icon === 'Youtube') return <YouTubeIcon sx={style} />;
    if (icon === 'TikTok')
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={svgStyle}
        >
          <ReactSVG
            src={tiktok}
            beforeInjection={svg =>
              svg.setAttribute(
                'style',
                `width: 80%; height: 80%; fill: ${myTheme.palette.text.terceary}`
              )
            }
          />
        </Box>
      );
  };

  if (onClick) {
    return <IconButton onClick={onClick}>{getIcon()}</IconButton>;
  }

  return getIcon();
};

export const StyledTextField = ({
  label,
  value,
  setData,
  error,
  required,
  ml,
}) => {
  const { myFont } = useMyTheme();

  const font = () => {
    if (myFont.buttonSize === 'small') return 15;
    return 20;
  };

  const style = {
    style: {
      fontSize: font(),
    },
  };

  return (
    <TextField
      label={label}
      margin="normal"
      error={error}
      required={required}
      fullWidth
      multiline={ml}
      rows={ml && 4}
      inputProps={style}
      InputLabelProps={style}
      value={value}
      onChange={e => setData(data => ({ ...data, [label]: e.target.value }))}
    />
  );
};
