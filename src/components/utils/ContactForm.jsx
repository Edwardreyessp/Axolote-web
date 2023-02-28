import { Box, Paper, Stack, TextField } from '@mui/material';
import { StyledText } from './StyledComponent';

const ContactForm = () => {
  return (
    <Box
      height="calc(100vh - 84px)"
      width="100%"
      maxHeight="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={2}>
        <Stack p="10%" spacing={2}>
          <StyledText value="Contáctanos" variant="h1" />
          <TextField label="Outlined" variant="outlined" />
        </Stack>
      </Paper>
    </Box>
  );
};

export default ContactForm;
