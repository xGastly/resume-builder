import React from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';
import * as Yup from 'yup';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import UserAPI from '../api/user';
import { setToken } from 'src/helpers/utils/helpers';
import { useAuthContext } from 'src/helpers/context/AuthContext';

const LoginForm = () => {
  const { setUser } = useAuthContext();

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      try {
        const { data, status } = await UserAPI.login(values.email, values.password);
        if (status !== 200) {
        }
        if (data?.user) {
          setToken(data.jwt);
          setUser(data.user);
          Router.push('/');
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs" className="pt-12">
      <Paper
        elevation={3}
        style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5">Login Form</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-resume-800 mb-2"
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
