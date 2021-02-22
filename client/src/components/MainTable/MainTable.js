import React from 'react'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Button, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { deleteAgent } from '../../actions/agents'

import { withStyles } from '@material-ui/core/styles';

const MainTable = ({ setCurrentId }) => {
    const agents  = useSelector((state) => state.agents)
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
        !agents.length ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Agent</StyledTableCell>
                            <StyledTableCell>Address</StyledTableCell>
                            <StyledTableCell>Phone</StyledTableCell>
                            <StyledTableCell>Edit/Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {agents.map((agent) => (
                            <StyledTableRow key={agent.agent}>
                              <StyledTableCell component="th" scope="row">
                                  {agent.agent}
                              </StyledTableCell>
                              <StyledTableCell>{agent.address}</StyledTableCell>
                              <StyledTableCell>{agent.phone}</StyledTableCell>
                              <StyledTableCell>
                                  <Button style={{color: 'white'}} size='small' onClick={() => {setCurrentId(agent._id)}}>
                                    <MoreHorizIcon fontSize='default' />
                                  </Button>
                                  <Button style={{color: 'white'}} size='small' onClick={() => dispatch(deleteAgent(agent._id))}>
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