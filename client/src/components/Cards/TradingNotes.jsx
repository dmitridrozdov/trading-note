import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import TradingNote from './Card/TradingNote'
import LongTermCard from './LongTermCard/LongTermCard'
import Divider from '../Divider/Divider'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars

import useStyles from './styles'

const TradingNotes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes)
  const classes = useStyles()

  const totalDeposit = notes.reduce((acc, note) => {
    if (note.closeposition === '') {
      // Convert note.deposit to a number before adding
      return acc + Number(note.deposit);
    }
    return acc;
  }, 0);

  return (
    !notes.length ? <FlapperSpinner /> : (
      <div>
        <Grid className={classes.container} container spacing={3}>
          {notes
            .filter(function(note) {
              return note.closeposition === ''
            })
            .filter(function(note) {
              return note.tp !== 'LT'
            })
            // .sort(function (a, b) {
            //     return b.createdAt.localeCompare(a.createdAt)
            //   })
            .map((note) => (
                <Grid key={note._id} item xs={12} sm={6} md={6}>
                  <TradingNote note={note} setCurrentId={setCurrentId} />
                </Grid>
              ))
          }
        </Grid>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <Divider name='Long Term'/>
        <br/> <br/>
        <Grid className={classes.container} container>
          {notes
            .filter(function(note) {
              return note.closeposition === ''
            })
            .filter(function(note) {
              return note.tp === 'LT'
            })
            // .sort(function (a, b) {
            //     return b.createdAt.localeCompare(a.createdAt)
            //   })
            .map((note) => (
                <Grid key={note._id} item xs={12} sm={12} md={12}>
                  {/* <TradingNote note={note} setCurrentId={setCurrentId} /> */}
                  <LongTermCard note={note} setCurrentId={setCurrentId} />
                </Grid>
              ))
          }
        </Grid>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <Divider name='Completed'/>
        <br/> <br/> 
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {notes
            .filter(function(note) {
              return note.closeposition !== ''
            })
            .reverse()
            .slice(0, 4)
            .map((note) => (
              <Grid key={note._id} item xs={12} sm={6} md={6}>
                <TradingNote note={note} setCurrentId={setCurrentId} />
              </Grid>
            ))}  
        </Grid>
        
        <br/> <br/> <br/> <br/> <br/> <br/>
        <Divider name='Deposit'/>

        <Grid className={classes.container} container spacing={3}>
          {/* Display the total sum of deposits */}
          <Typography variant="h6">Total Deposit: {totalDeposit}</Typography>
        </Grid>     

      </div>
    )
  )
}

export default TradingNotes