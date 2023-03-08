import { Box, Button } from '@mui/material';
import { StyledIcon, StyledText } from '../utils/StyledComponent';

const Footer = () => {
  const social = [
    // { title: 'Facebook', href: '' },
    { title: 'Instagram', href: 'https://www.instagram.com/axoloteweb/' },
    // { title: 'Twitter', href: '' },
    // { title: 'YouTube', href: '' },
    // { title: 'TikTok', href: '' },
  ];
  const help = [
    { title: 'Contáctanos', href: '#Contact' },
    // { title: 'Preguntas frecuentes', href: '' },
    // { title: 'Contacto', href: '' },
    { title: 'Plantillas', href: 'https://www.instagram.com/axoloteweb/' },
  ];
  const terms = [
    'Términos y condiciones',
    '|',
    'Políticas de privacidad',
    // '|',
    // 'Cookies',
  ];

  return (
    <>
      <Links social={social} help={help} />
      <TermsAndConditions terms={terms} />
    </>
  );
};

const Links = ({ social, help }) => {
  return (
    <Box
      display="flex"
      gap={8}
      py={4}
      bgcolor={'text.primary'}
      justifyContent="center"
    >
      <Box>
        <Title title="Redes sociales" />
        {social.map((item, index) => {
          return <Social key={index} social={item} />;
        })}
      </Box>
      <Box>
        <Title title="Ayuda" />
        {help.map((item, index) => {
          return (
            <a key={index} href={item.href} rel="noreferrer" target="_blank">
              <Box>
                <StyledText
                  value={item.title}
                  variant="caption"
                  color="text.terceary"
                />
              </Box>
            </a>
          );
        })}
      </Box>
    </Box>
  );
};

const Title = ({ title }) => {
  return (
    <Box pb={2.5}>
      <StyledText
        value={title}
        variant="body2"
        color="text.terceary"
        align="start"
        weight="bold"
      />
    </Box>
  );
};

const TermsAndConditions = ({ terms }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems={{ xs: 'center', sm: 'flex-start' }}
      flexDirection={{ xs: 'column', sm: 'row' }}
      bgcolor="background.dark"
      py={2}
    >
      <StyledText
        value="© Todos los derechos reservados: Axolote Web 2023"
        variant="caption"
        color="text.terceary"
      />
      <Box display="flex" gap={1}>
        {terms.map((item, index) => {
          return <TermText key={index} text={item} />;
        })}
      </Box>
    </Box>
  );
};

const TermText = ({ text }) => {
  return <StyledText value={text} variant="caption" color="text.terceary" />;
};

const Social = ({ social }) => {
  return (
    <a href={social.href} rel="noreferrer" target="_blank">
      <Box display="flex" gap={2} alignItems="center">
        <StyledIcon icon={social.title} />
        <StyledText
          value={social.title}
          variant="caption"
          color="text.terceary"
        />
      </Box>
    </a>
  );
};

export default Footer;
