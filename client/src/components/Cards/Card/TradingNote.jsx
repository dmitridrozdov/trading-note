import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
// import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles';

const TradingNote = ({ note, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

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
        {/* <Typography variant="body2" color="textSecondary" component="p">{note.deposit}</Typography> */}
        <div className={classes.gridContainer}>
          <div className={classes.column1}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
          <div className={classes.column2}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
          <div className={classes.column3}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
        </div>
        <div className={classes.gridContainer}>
          <div className={classes.column1}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
          <div className={classes.column2}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
          <div className={classes.column3}>
            <Typography className={classes.noteLabel}>Deposit:</Typography>
            <Typography className={classes.noteInput}>{note.deposit}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingNote
