import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },

  

  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
  },

  cellTitle: { whiteSpace: 'nowrap' },

  itemTitle: { 
    display: 'inline-block',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: 'lightgrey',
   },

  titleActive: {
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontSize: '18px',
    display: 'inline-block',
    color: 'black',
  },

  titleProfit: {
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontSize: '18px',
    display: 'inline-block',
    color: 'green',
  },

  titleLoss: {
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontSize: '18px',
    display: 'inline-block',
    color: 'red',
  },

  noteLabel: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: 'lightgrey',
  },

  noteInput: {
      fontFamily: 'Montserrat',
      fontSize: '14px',
  },


  // grid: {
  //   display: 'flex',
  // },
  // details: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   margin: '20px',
  // },
  // cardActions: {
  //   padding: '0 16px 8px 16px',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  // },
});