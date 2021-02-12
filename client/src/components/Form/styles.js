import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0,0,0,0.01)'
    // boxShadow: 'none',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  textStyle: {
    fontFamily: 'Montserrat',
  },
  textMargin: {
    marginTop: 5,
  },
  multilineColor: {
    fontFamily: 'Montserrat',
  }
}));