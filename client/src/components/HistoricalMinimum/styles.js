import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  styledTable: {
    borderCollapse: 'collapse',
    margin: '10px 0',
    fontSize: '0.9em',
    fontFamily: 'Varela Round',
    minWidth: '400px',
    borderColor: '#e0e0e0',
    border: '1px solid',
    
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
  },

  styledTableHead: {
    backgroundColor: '#009879',
    color: '#ffffff',
    // textAlign: 'left',
    padding: '12px 15px',
  },

  styledTableCell: {
    padding: '12px 15px',
  },

  styledTableTr: {
    borderBottom: '1px solid #dddddd',
  }

})