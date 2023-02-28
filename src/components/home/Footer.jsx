import { Box } from '@mui/material';
import { StyledIcon, StyledText } from '../utils/StyledComponent';

const Footer = () => {
  const social = ['Facebook', 'Instagram', 'Twitter', 'Youtube', 'TikTok'];
  const help = [
    'Contáctanos',
    'Preguntas frecuentes',
    'Contacto',
    'Plantillas',
  ];
  const terms = [
    'Términos y condiciones',
    '|',
    'Políticas de privacidad',
    '|',
    'Cookies',
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
            <Box key={index}>
              <StyledText
                value={item}
                variant="caption"
                color="text.secondary"
              />
            </Box>
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
        color="text.secondary"
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
        value="© Todos los derechos reservados: Axolote Web 2021"
        variant="caption"
        color="text.secondary"
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
  return <StyledText value={text} variant="caption" color="text.secondary" />;
};

const Social = ({ social }) => {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <StyledIcon icon={social} />
      <StyledText value={social} variant="caption" color="text.secondary" />
    </Box>
  );
};

export default Footer;
