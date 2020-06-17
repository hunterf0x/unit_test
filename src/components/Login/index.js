import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import useForm from "./useForm";
import LogoLogin from '../../assets/images/logo_login.svg';
import EyeOff from '../../assets/images/off-gray.svg';
import EyeOn from '../../assets/images/on-gray.svg';
import CircleAlert from '../../assets/images/circle-alert.svg';
import CircleSuccess from '../../assets/images/circle-success.svg';
//import { login } from '../actions/authActions';

//import Store from '../store';

import styles from './styles';

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};

const Login = ({ classes }) => {
  //const loginState = useSelector(state => state.login);
  //const dispatch = useDispatch();

  //const store = React.useContext(Store);
  //const { setLoading } = store;

  const [values, setValues] = useState({
    password: '',
    username: '',
    usernameError: {
      message: '',
      error: false
    },
    passwordError: {
      message: '',
      error: false
    },
    showPassword: false,
    showHelp: false
  });

  const [errorMessage, setErrorMessage] = useState(null);

  // Component error updated
  /*useEffect(() => {
    if (loginState.error) {
      if (loginState.error === 'invalid user') {
        setErrorMessage('Parece que tu usuario o contraseña es inválido o no existe, por favor contacta al administrador');
      } else {
        setErrorMessage('Se ha producido un error. Por favor vuelva a intentarlo.');
      }
    }
    setLoading(loginState.isLoading);
  }, [loginState, setLoading]);*/


  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleBlur = prop => event => {
    if (event.target.value === '') {
      setValues({
        ...values,
        [prop]: {
          message: `Por favor ingresa tu ${event.target.name}`,
          error: true
        }
      });
    } else {
      setValues({ ...values, [prop.message]: '', [prop.error]: false });
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const showHelp = () => {
    setValues({ ...values, showHelp: !values.showHelp });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    //dispatch(login(values.username, values.password));
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.main}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={8} lg={4}>
            <Paper className={classes.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item className={classes.logo}>
                  <img
                    src={LogoLogin}
                    alt="logo"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.text}>Bienvenido a </Typography>
                  <Typography variant="inherit" className={classNames(classes.text, classes.largeText)}>DEMO TESTING</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={9}>
                  { values.showHelp ? (
                    <Grid
                      container
                      direction="column"
                      justify="space-between"
                      alignItems="stretch"
                    >
                      <Grid item className={classes.spacerHelp}>
                        <Typography variant="h6" className={classes.help}>
                          ¿Necesitas ayuda?
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          Si aún no puedes ingresar o tienes problemas con tu usuario o
                          contraseña, escríbenos al siguiente canal de slack:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={classes.hashtagHelp}>
                          #testing
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <form className={classes.form} onSubmit={handleSubmit} id="login-form">
                      <FormControl margin="normal" required fullWidth>
                        <FormHelperText id="username-text" className={classes.label}>Usuario</FormHelperText>
                        <OutlinedInput
                          id="username"
                          name="usuario"
                          onChange={handleChange('username')}
                          error={!!values.usernameError.error && !values.username}
                          onBlur={handleBlur('usernameError')}
                          placeholder="11111111k"
                          aria-describedby="username-text"
                          className={classes.input}
                          value={values.username || ''}
                          inputProps={{
                            'aria-label': 'username'
                          }}
                          endAdornment={values.usernameError.error && !values.username
                            ? (
                              <img src={CircleAlert} alt="error" />
                            ) : values.username && (<img src={CircleSuccess} alt="success" />)}
                          labelWidth={0}
                        />
                        <FormHelperText id="component-error-text" error>{values.usernameError.error && !values.username && (values.usernameError.message)}</FormHelperText>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <FormHelperText id="password-text" className={classes.label}>Contraseña</FormHelperText>
                        <OutlinedInput
                          id="password"
                          name="contraseña"
                          type={values.showPassword ? 'text' : 'password'}
                          onChange={handleChange('password')}
                          onBlur={handleBlur('passwordError')}
                          error={!!(values.passwordError.error && !values.password)}
                          className={classes.input}
                          placeholder="Ingresa tu contraseña"
                          value={values.password || ''}
                          endAdornment={values.passwordError.error && !values.password
                            ? (<img src={CircleAlert} alt="error" />)
                            : (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? <img src={EyeOn} alt="eye-on" /> : <img src={EyeOff} alt="eye-off" />}
                                </IconButton>
                              </InputAdornment>
                            )}
                          aria-describedby="password-text"
                          inputProps={{
                            'aria-label': 'password'
                          }}
                          labelWidth={0}
                        />
                        <FormHelperText id="component-error-text" error>{values.passwordError.error && !values.password && (values.passwordError.message) }</FormHelperText>
                        {errorMessage && (<FormHelperText id="component-error-text-credentials" error>{ errorMessage }</FormHelperText>)}
                      </FormControl>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.submit}
                      >
                        <Typography variant="h6">
                          Inicia sesión
                        </Typography>
                      </Button>
                    </form>

                  )}
                  <Typography gutterBottom noWrap className={classes.spacer}>
                    <ButtonBase
                      className={classNames(classes.textHelpLink, classes.link)}
                      onClick={showHelp}
                    >
                      {values.showHelp ? 'Volver al ingreso' : '¿Necesitas ayuda?'}
                    </ButtonBase>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
};


Login.propTypes = {
  classes: PropTypes.shape({
    main: PropTypes.string,
    paper: PropTypes.string,
    logo: PropTypes.string,
    text: PropTypes.string,
    largeText: PropTypes.string,
    form: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string,
    submit: PropTypes.string,
    spacer: PropTypes.string,
    textHelpLink: PropTypes.string,
    link: PropTypes.string,
    alert: PropTypes.string,
    spacerHelp: PropTypes.string,
    help: PropTypes.string,
    hashtagHelp: PropTypes.string
  }).isRequired
};


export default withStyles(styles)(Login);
