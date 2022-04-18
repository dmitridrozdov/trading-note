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
    // borderColor: 'lightgray',
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
    padding: '5px 5px',
    fontFamily: 'Montserrat',
    fontSize: '10px',
    color: '#858585',
   },

  timeTitle: {
    padding: '0px 20px',
    display: 'inline-block',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: '#858585',
   },

   itemEntry: { 
    display: 'inline-block',
    padding: '5px 5px',
    fontFamily: 'Varela Round',
    fontSize: '12px',
    color: 'black',
   },

   itemCurrentPrice: {
    display: 'inline-block',
    padding: '5px 5px',
    fontFamily: 'Varela Round',
    fontSize: '12px',
    color: '#686dcc',
   },

  titleActive: {
    padding: '5px 5px',
    fontFamily: 'Roboto Slab',
    fontSize: '12px',
    display: 'inline-block',
    color: 'black',
  },

  titleProfit: {
    padding: '5px 5px',
    fontFamily: 'Roboto Slab',
    fontSize: '12px',
    display: 'inline-block',
    color: '#4da0b3', 
  },

  titleLoss: {
    padding: '5px 5px',
    fontFamily: 'Roboto Slab',
    fontSize: '12px',
    display: 'inline-block',
    color: '#ed2939',
  },

  noteLabel: {
    fontFamily: 'Montserrat',
    fontSize: '10px',
    color: '#858585',
  },

  noteInput: {
      fontFamily: 'Varela Round',
      fontSize: '14px',
  },

  noteCurrentPrice: {
    fontFamily: 'Varela Round',
    fontSize: '14px',
    color: '#4765fc',
},

  currentLoss: {
    fontFamily: 'Varela Round',
    fontSize: '12px',
    color: 'white',
    display: 'inline-block',
    backgroundColor: '#ed2939',
    padding: '5px 5px',
  },

  currentProfit: {
    fontFamily: 'Varela Round',
    fontSize: '12px',
    color: 'white',
    fontWeight: 'bold',
    display: 'inline-block',
    backgroundColor: '#4da0b3',
    padding: '5px 5px',
  },

  noteLoss: {
    fontFamily: 'Varela Round',
    fontSize: '20px',
    color: '#ed2939',
  },

  noteProfit: {
    fontFamily: 'Varela Round',
    fontSize: '20px',
    color: '#4da0b3',
  },

  gridContainer: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
  },

  column1: {
      gridColumn: 1,
  },

  column2: {
      gridColumn: 2,
  },

  column3: {
    gridColumn: 3,
},

  column4: {
    gridColumn: 4,
  },

  column5: {
    gridColumn: 5,
  },

  column6: {
    gridColumn: 6,
  },

});