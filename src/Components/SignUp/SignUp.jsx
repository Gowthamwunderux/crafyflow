import { useState } from 'react';
import '../../Styles/colors.scss';
import '../../Styles/SignUp.css';

import {
  Typography,
  Box,
  Grid,
  Container,
  TextField,
  Button,
} from '@mui/material';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleClick(event) {
    event.preventDefault();
    if (name === '') {
      alert('please fill your name');
    } else if (email === '') {
      alert('please fill your Email');
    } else if (password === '') {
      alert('please fill your password');
    } else if (confirmPassword === '') {
      alert('please fill your Confirm password');
    } else if (password != confirmPassword) {
      alert('your password is not match');
    }
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  }
  return (
    <div className="container">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container maxWidth="sm">
              <Box className="sign-up">
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', position: 'relative', top: 30 }}
                >
                  Innocraft
                </Typography>
                <form onSubmit={handleClick}>
                  <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={2}
                    label="Full Name"
                    className="textField"
                    sx={{ margin: '1rem' }}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={2}
                    label="Email Address"
                    className="textField"
                    sx={{ margin: '1rem' }}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={2}
                    label=" Password"
                    className="textField"
                    type="password"
                    sx={{ margin: '1rem' }}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={2}
                    label="Confirm Password"
                    className="textField"
                    sx={{ margin: '1rem' }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Typography className="TermsPrivacy" sx={{ fontSize: 12 }}>
                    {' '}
                    By signing up, I accept the Terms & Privacy policies{' '}
                  </Typography>
                  <Button variant="contained" className="btn" type="submit">
                    Sign-up for InnoCraft
                  </Button>

                  <p className="textField OR"> OR </p>

                  <Typography
                    sx={{ color: 'secondary' }}
                    className="googleAccount"
                  >
                    Have a Google account?
                  </Typography>

                  <Button
                    variant="outlined"
                    size="medium"
                    className="sign-in-btn"
                    type="submit"
                  >
                    Sign In With In Google
                  </Button>
                </form>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6}>
            {' '}
            images
        

          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignUp;
