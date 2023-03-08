import { Box, Stack } from '@mui/material';
import { StyledButton, StyledText } from './StyledComponent';
import { useMyTheme } from '../../hooks/Palette';

const Banner = ({ banner }) => {
  const { myFont } = useMyTheme();

  const style = () => {
    if (myFont.buttonSize === 'small') {
      return {
        height: '50%',
        width: '80%',
      };
    }
    if (myFont.buttonSize === 'medium') {
      return {
        height: '40%',
        width: '60%',
      };
    }

    return {
      height: '70%',
      width: '40%',
    };
  };

  const direction = () => {
    if (myFont.buttonSize === 'large') {
      if (banner.type === 'primary') return 'row-reverse';
      return 'row';
    }

    return 'column';
  };

  return (
    <Box
      height="calc(100vh - 84px)"
      bgcolor={`${banner.type}.light`}
      width="100%"
      maxHeight="100%"
    >
      {banner.titleBanner && <TitleBanner banner={banner} />}
      <Box
        height={`calc(100vh - 84px${banner.titleBanner ? ' - 175.59px' : ''})`}
        width="100%"
        display="flex"
        flexDirection={direction}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Description banner={banner} />
        <Box sx={style}>{banner.children}</Box>
      </Box>
    </Box>
  );
};

const TitleBanner = ({ banner }) => {
  const { myFont } = useMyTheme();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height={myFont.buttonSize === 'large' ? '20%' : '15%'}
      bgcolor={`background.${banner.type}`}
      px={myFont.buttonSize !== 'large' ? '10%' : '30%'}
    >
      <StyledText
        value={banner.titleBanner}
        variant="h2"
        align="center"
        color={banner.type === 'primary' && 'text.terceary'}
      />
    </Stack>
  );
};

const Description = ({ banner }) => {
  const { myFont } = useMyTheme();

  return (
    <Stack
      justifyContent="center"
      alignItems={myFont.buttonSize !== 'large' && 'center'}
      gap={4}
      maxWidth={myFont.buttonSize === 'small' ? '90%' : '40%'}
    >
      <StyledText value={banner.title} variant="h2" />
      <StyledText value={banner.desc} variant="body2" />
      <Box
        display="flex"
        justifyContent={myFont.buttonSize === 'small' && 'center'}
      >
        <StyledButton
          value={banner.button.title}
          color={`${banner.type}`}
          href={banner.button.href}
        />
      </Box>
    </Stack>
  );
};

export default Banner;
