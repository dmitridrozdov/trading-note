import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { updateTradingNote, deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles';

const TradingNote = ({ note, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(note.createAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(note._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{note.coin}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{note.deposit}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteTradingNote(note._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default TradingNote
