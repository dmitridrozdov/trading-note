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
    const coins  = useSelector((state) => state.coins)
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
        !coins.length ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>coin</StyledTableCell>
                            <StyledTableCell>deposit</StyledTableCell>
                            <StyledTableCell>Entry Point</StyledTableCell>
                            <StyledTableCell>Stop Loss</StyledTableCell>
                            <StyledTableCell>Take Profit 1</StyledTableCell>
                            <StyledTableCell>Take Profit 2</StyledTableCell>
                            <StyledTableCell>Edit/Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {coins.map((coin) => (
                            <StyledTableRow key={coin.coin}>
                              <StyledTableCell component="th" scope="row">
                                  {coin.coin}
                              </StyledTableCell>
                              <StyledTableCell>{coin.deposit}</StyledTableCell>
                              <StyledTableCell>{coin.entry}</StyledTableCell>
                              <StyledTableCell>{coin.stoploss}</StyledTableCell>
                              <StyledTableCell>{coin.tp1}</StyledTableCell>
                              <StyledTableCell>{coin.tp2}</StyledTableCell>
                              <StyledTableCell>
                                  <Button style={{color: 'white'}} size='small' onClick={() => {setCurrentId(coin._id)}}>
                                    <MoreHorizIcon fontSize='default' />
                                  </Button>
                                  <Button style={{color: 'white'}} size='small' onClick={() => dispatch(deleteTradingNote(coin._id))}>
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