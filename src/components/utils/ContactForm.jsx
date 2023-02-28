import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { Box, Paper, Stack } from '@mui/material';
import { StyledButton, StyledText, StyledTextField } from './StyledComponent';

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
      <Box sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%' } }}>
        <Paper elevation={3}>
          <Stack p="10%" spacing={3} alignItems="center">
            <StyledText value="Contáctanos" variant="h1" />
            <InputsForm />
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

const InputsForm = () => {
  const [data, setData] = useState({
    Nombre: '',
    Correo: '',
    Mensaje: '',
  });
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleSubmit = () => {
    if (!data.Nombre) setErrorName(true);
    else setErrorName(false);
    if (!isEmail(data.Correo)) setErrorEmail(true);
    else setErrorEmail(false);

    if (data.Nombre && isEmail(data.Correo)) {
      console.log('Enviando...');
    }
  };

  return (
    <Stack width="100%">
      <StyledTextField
        label="Nombre"
        value={data.Nombre}
        setData={setData}
        error={errorName}
        required={true}
      />
      <StyledTextField
        label="Correo"
        value={data.Correo}
        setData={setData}
        error={errorEmail}
        required={true}
      />
      <StyledTextField
        label="Mensaje"
        value={data.Mensaje}
        setData={setData}
        ml={true}
      />
      <StyledButton value="Enviar" onClick={handleSubmit} />
    </Stack>
  );
};

export default ContactForm;
