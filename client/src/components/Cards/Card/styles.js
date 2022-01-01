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

   title: {
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontSize: '18px',
    display: 'inline-block',
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

  // wrapper {
  //   display: 'grid',
  //   gridTemp: repeat(3, 1fr);
  //   gap: 10px;
  //   grid-auto-rows: minmax(100px, auto);
  // }

  gridContainer: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
  },

  column1: {
    gridColumn: 1,
    // gridRow: 1,
  },

  column2: {
    gridColumn: 2,
    // gridRow: 1,
  },

  column3: {
    gridColumn: 3,
    // gridRow: 1,
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