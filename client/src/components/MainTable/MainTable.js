import React from 'react'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Button, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { deleteTradingNote } from '../../actions/tradingNotes'

import { withStyles } from '@material-ui/core/styles';

const MainTable = ({ setCurrentId }) => {
    const notes  = useSelector((state) => state.notes)
    const classes = useStyles()
    const dispatch = useDispatch()

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: 'rgb(72, 106, 176)',
          color: 'white',
          fontFamily: 'Montserrat',
        },
        body: {
          fontSize: 14,
          fontFamily: 'Montserrat',
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
          '&:nth-of-type(even)': {
            backgroundColor: 'rgb(166, 212, 214)',
          },
        },
      }))(TableRow);

    return(
        !notes.length ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>coin</StyledTableCell>
                            <StyledTableCell>type</StyledTableCell>
                            <StyledTableCell>deposit</StyledTableCell>
                            <StyledTableCell>Entry Point</StyledTableCell>
                            <StyledTableCell>Stop Loss</StyledTableCell>
                            <StyledTableCell>Take Profit 1</StyledTableCell>
                            <StyledTableCell>Take Profit 2</StyledTableCell>
                            <StyledTableCell>Edit/Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {notes.map((note) => (
                            <StyledTableRow key={note.coin}>
                              <StyledTableCell component="th" scope="row">
                                  {note.coin}
                              </StyledTableCell>
                              <StyledTableCell>{note.type}</StyledTableCell>
                              <StyledTableCell>{note.deposit}</StyledTableCell>
                              <StyledTableCell>{note.entry}</StyledTableCell>
                              <StyledTableCell>{note.stoploss}</StyledTableCell>
                              <StyledTableCell>{note.tp1}</StyledTableCell>
                              <StyledTableCell>{note.tp2}</StyledTableCell>
                              <StyledTableCell>
                                  <Button style={{color: 'white'}} size='small' onClick={() => {setCurrentId(note._id)}}>
                                    <MoreHorizIcon fontSize='default' />
                                  </Button>
                                  <Button style={{color: 'white'}} size='small' onClick={() => dispatch(deleteTradingNote(note._id))}>
                                    <DeleteIcon fontSize='default' />
                                  </Button>
                              </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>              
            </Grid>
        )
    )
}

export default MainTable