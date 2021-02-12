import React from 'react'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Button, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { withStyles } from '@material-ui/core/styles';

const MainTable = ({ setCurrentId }) => {
    const posts  = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: 'rgb(117, 81, 27)',
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
            backgroundColor: 'rgb(255, 195, 105)',
          },
          '&:nth-of-type(even)': {
            backgroundColor: 'rgb(255, 221, 171)',
          },
        },
      }))(TableRow);

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Agent</StyledTableCell>
                            <StyledTableCell>Names</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {posts.map((post) => (
                            <StyledTableRow key={post.agent}>
                              <StyledTableCell component="th" scope="row">
                                  {post.agent}
                              </StyledTableCell>
                              <StyledTableCell>{post.names}</StyledTableCell>
                              <StyledTableCell>
                                  <Button style={{color: 'white'}} size='small' onClick={() => {setCurrentId(post._id)}}>
                                    <MoreHorizIcon fontSize='default' />
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