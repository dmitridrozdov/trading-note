import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import TradingNote from './Card/TradingNote'
import useStyles from './styles'

const TradingNotes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes)
  const classes = useStyles()

  return (
    !notes.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {notes.sort(function (a, b) {
              return b.createdAt.localeCompare(a.createdAt)
            }).map((note) => (
          <Grid key={note._id} item xs={12} sm={6} md={6}>
            <TradingNote note={note} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default TradingNotes