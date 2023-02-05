import React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";

const theme = createTheme();

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogOut,
  } = useAuth();

  return (
    <div>
      {""}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar>
              <LockOutlined />
            </Avatar>
            <Typography>Sign in</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {hasAccount ? (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bacgroundColor: "green" }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bacgroundColor: "royalblue" }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  {hasAccount ? (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Don't have an acoount? Sign Up
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Don't have an acoount? Sign Up
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Auth;
