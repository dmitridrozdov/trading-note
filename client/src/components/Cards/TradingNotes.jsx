import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import TradingNote from './Card/TradingNote'
import Divider from '../Divider/Divider'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars

import useStyles from './styles'

const TradingNotes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes)
  const classes = useStyles()

  return (
    !notes.length ? <FlapperSpinner /> : (
      <div>
        <Grid className={classes.container} container spacing={3}>
          {notes
            .filter(function(note) {
              return note.closeposition === ''
            })
            .filter(function(note) {
              return note.tp1 !== 'LONG TERM'
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
        <Grid className={classes.container} container spacing={3}>
          {notes
            .filter(function(note) {
              return note.closeposition === ''
            })
            .filter(function(note) {
              return note.tp1 === 'LONG TERM'
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
        <Divider name='Completed'/>
        <br/> <br/> 
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {notes
            .filter(function(note) {
              return note.closeposition !== ''
            })
            // .sort(function (a, b) {
            //     return b.createdAt.localeCompare(a.createdAt)
            //   })
            .map((note) => (
              <Grid key={note._id} item xs={12} sm={6} md={6}>
                <TradingNote note={note} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          
        </Grid>
      </div>
    )
  )
}

export default TradingNotes