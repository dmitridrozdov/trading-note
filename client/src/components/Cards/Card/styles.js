import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
    borderShadow: 'none',
    border: 'none',
    borderColor: 'red',
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
    color: '#ababab',
   },

  timeTitle: {
    padding: '0px 20px',
    display: 'inline-block',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: '#ababab',
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
    color: '#33b864',
  },

  titleLoss: {
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontSize: '18px',
    display: 'inline-block',
    color: '#ed2939',
  },

  noteLabel: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: '#ababab',
  },

  noteInput: {
      fontFamily: 'Varela Round',
      fontSize: '14px',
  },

  noteLoss: {
    fontFamily: 'Varela Round',
    fontSize: '18px',
    color: '#ed2939',
  },

  noteProfit: {
    fontFamily: 'Varela Round',
    fontSize: '18px',
    color: '#33b864',
  },

});