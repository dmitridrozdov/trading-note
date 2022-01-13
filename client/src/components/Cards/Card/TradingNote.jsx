import React, { useEffect, useState } from 'react'
import { Card, CardContent, Button, Typography } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import GridNoteContainer from './GridNoteContainer/GridNoteContainer'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles'

const api = {
  base: "https://api.binance.com/api/v3/ticker/price?symbol=",
}

const TradingNote = ({ note, setCurrentId }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [currentPice, setCurrentPrice] = useState(0)

  const getClassName = (closeposition, entry) => {
    if (closeposition === '') {
      return classes.titleActive
    }
    const classResult = parseFloat(closeposition)
     > parseFloat(entry) ? classes.titleProfit : classes.titleLoss
    return classResult
  }

  const cardType = getClassName(note.closeposition, note.entry)
  const requestCoin = note.coin.toUpperCase().replace('/', '').replace(/ /g,'')

  const fetchCurrentPrice = () => {
    fetch(`${api.base}` + requestCoin)
    .then((res) => res.json())
    .then((result) => {
      setCurrentPrice(result.price)
    })
  }

  useEffect(() => {
    setInterval(() => {
      fetchCurrentPrice()
    }, 10000)
  }, [])


  return (
    <Card className={classes.card} >
      <div className={classes.overlay2}>
        <Button style={{ color: '#858585' }} size="small" onClick={() => setCurrentId(note._id)}><Edit fontSize="small" /></Button>
        <Button style={{ color: '#858585' }} size="small" color="primary" onClick={() => dispatch(deleteTradingNote(note._id))}><DeleteIcon fontSize="small" /></Button>
      </div>
      <div className={classes.cellTitle}>
        <Typography className={cardType} gutterBottom variant="h5" component="h2">{(note.coin).toUpperCase()}</Typography>
        <Typography className={classes.itemTitle} gutterBottom>{note.type}</Typography>
        <Typography className={classes.itemTitle}>{moment(note.createdAt).fromNow()}</Typography>
      </div>
      <CardContent>
          <GridNoteContainer label1='Deposit:' value1={note.deposit} label2='Entry:' 
              value2={note.entry} label3='Stoploss:' value3={note.stoploss} stoplossline='true'/>

          <div className={classes.gridContainer}>
            <div className={classes.column1}>
                <Typography className={classes.noteLabel}>tp1:</Typography>
                <Typography className={classes.noteInput}>{note.tp}</Typography>
            </div>
            <div className={classes.column2}>
                <Typography className={classes.noteLabel}>tp2:</Typography>
                <Typography className={classes.noteInput}>{note.tp2}</Typography>
            </div>
            <div className={classes.column3}>
                <Typography className={classes.noteLabel}>tp3:</Typography>
                <Typography className={classes.noteInput}>{note.tp2}</Typography>
            </div>
            <div className={classes.column4}>
                <Typography className={classes.noteLabel}>tp4:</Typography>
                <Typography className={classes.noteInput}>{note.tp2}</Typography>
            </div>
            <div className={classes.column5}>
                <Typography className={classes.noteLabel}>tp5:</Typography>
                <Typography className={classes.noteInput}>{note.tp2}</Typography>
            </div>
            <div className={classes.column6}>
                <Typography className={classes.noteLabel}>Close:</Typography>
                <Typography className={classes.noteInput}>{note.closeposition}</Typography>
            </div>
        </div>

          <div className={classes.gridContainer}>
            <div className={classes.column1}>
              <Typography className={classes.noteLabel}>Current price:</Typography>
              <Typography className={classes.noteCurrentPrice}>{parseFloat(currentPice).toFixed(4)}</Typography>
            </div>
            <div className={classes.column2}>
                <Typography className={classes.noteLabel}>% from Entry:</Typography>
                <Typography className={parseFloat(currentPice) > parseFloat(note.entry) ? classes.currentProfit : classes.currentLoss}>
                  {
                    parseFloat(currentPice) > parseFloat(note.entry) ? '+' : '-'
                  }
                  {
                    parseFloat(currentPice) > parseFloat(note.entry) ? 
                    (100 - parseFloat(note.entry) * 100 / parseFloat(currentPice)).toFixed(2) : 
                    (100 - parseFloat(currentPice) * 100 / parseFloat(note.entry)).toFixed(2)
                  }%
                </Typography>
            </div>
          </div>
          {
            note.closeposition !== '' ?
            <>
              <br />
              <div className={classes.column2}>
                <Typography className={parseFloat(note.closeposition) > parseFloat(note.entry) ? classes.noteProfit : classes.noteLoss}>
                  {
                    parseFloat(note.closeposition) > parseFloat(note.entry) ? '+' : '-'
                  }
                  {
                    parseFloat(note.closeposition) > parseFloat(note.entry) ? 
                    (100 - parseFloat(note.entry) * 100 / parseFloat(note.closeposition)).toFixed(2) : 
                    (100 - parseFloat(note.closeposition) * 100 / parseFloat(note.entry)).toFixed(2)
                  }%
                </Typography>
              </div>
            </>
              : <div />
          }
          
      </CardContent>
    </Card>
  );
};

export default TradingNote
