import Image from '../../assets/images/main.png';

const styles = theme => ({
  main: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: 1066
    /* width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3, 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    } */
  },
  paper: {
    marginTop: theme.spacing(16),
    borderRadius: 20,
    alignItems: 'center',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1.5)
  },
  link: {
    textDecoration: 'none'
  },
  logo: {
    marginTop: theme.spacing(5)
  },
  text: {
    fontSize: 24,
    color: '#000000',
    marginTop: 20
  },
  largeText: {
    fontSize: 36
  },
  spacer: {
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(7)}px`
  },
  spacerHelp: {
    margin: `${theme.spacing(7)}px ${theme.spacing(4)}px ${theme.spacing(3)}px`
  },
  input: {
    borderRadius: 8
  },
  label: {
    color: '#000000',
    fontSize: 14,
    margin: theme.spacing(0.9)
  },
  textHelpLink: {
    color: '#0071ce',
    fontWeight: 'bold',
    fontSize: '1.05rem'
  },
  submit: {
    marginTop: theme.spacing(6),
    backgroundColor: '#0071ce',
    // opacity: 0.6,
    borderRadius: 27.5,
    width: '60%',
    textTransform: 'none'
  },
  alert: {
    textAlign: 'left'
  },
  help: {
    color: '#1d2129',
    fontWeight: 'bold',
    fontSize: 19
  },
  hashtagHelp: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default styles;
