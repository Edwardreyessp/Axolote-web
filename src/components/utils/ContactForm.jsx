import { useRef, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { Box, Paper, Stack } from '@mui/material';
import { StyledButton, StyledText, StyledTextField } from './StyledComponent';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  return (
    <main id="Contact">
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
    </main>
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
  const form = useRef();

  const SyteldTextFields = [
    {
      label: 'Nombre',
      value: data.Nombre,
      setData,
      error: errorName,
    },
    {
      label: 'Correo',
      value: data.Correo,
      setData,
      error: errorEmail,
    },
    { label: 'Mensaje', value: data.Mensaje, setData, ml: true },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    if (!data.Nombre) setErrorName(true);
    else setErrorName(false);
    if (!isEmail(data.Correo)) setErrorEmail(true);
    else setErrorEmail(false);

    if (data.Nombre && isEmail(data.Correo)) {
      console.log('Enviando...');
      sendEmail(e);
    }
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c44rxkq',
        'template_a2ttycn',
        form.current,
        'noEYbbzDn84ul5Nhx'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Stack width="100%">
      <form ref={form} onSubmit={handleSubmit}>
        {SyteldTextFields.map((item, index) => {
          return (
            <StyledTextField
              key={index}
              label={item.label}
              value={item.value}
              setData={item.setData}
              error={item.error}
              required={item.required}
              ml={item.ml}
            />
          );
        })}
        <StyledButton value="Enviar" />
      </form>
    </Stack>
  );
};

export default ContactForm;
