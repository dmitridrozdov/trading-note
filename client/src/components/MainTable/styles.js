import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0,0,0,0.05)'
    // boxShadow: 'none',
  },
  table: {
    minWidth: 650,
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
}));