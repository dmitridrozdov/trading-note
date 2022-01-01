import React from 'react'
import { Card, CardContent, Button, Typography } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
// import moment from 'moment'
import { useDispatch } from 'react-redux'

import GridNoteContainer from './GridNoteContainer/GridNoteContainer'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles'

const TradingNote = ({ note, setCurrentId }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      {/* <div className={classes.overlay}>
        <Typography variant="body2">{moment(note.createdAt).fromNow()}</Typography>
      </div> */}
      <div className={classes.overlay2}>
        <Button style={{ color: 'lightgrey' }} size="small" onClick={() => setCurrentId(note._id)}><Edit fontSize="small" /></Button>
        <Button style={{ color: 'lightgrey' }} size="small" color="primary" onClick={() => dispatch(deleteTradingNote(note._id))}><DeleteIcon fontSize="small" /></Button>
      </div>
      <div className={classes.cellTitle}>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{(note.coin).toUpperCase()}</Typography>
        <Typography className={classes.itemTitle} gutterBottom>{note.type}</Typography>
      </div>
      <CardContent>
          <GridNoteContainer label1='Deposit:' value1={note.deposit} label2='Entry:' 
              value2={note.entry} label3='Stoploss:' value3={note.stoploss} stoplossline='true'/>
          <br />
          <GridNoteContainer className={classes.marginRow} label1='Take profit 1:' value1={note.tp1} 
              label2='Take profit 2:' value2={note.tp2} label3='Close Position:' value3={note.closeposition} stoplossline='false'/>
      </CardContent>
    </Card>
  );
};

export default TradingNote
