import React, { useEffect, useState } from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles'

const api = {
    base: "https://api.binance.com/api/v3/ticker/price?symbol=",
  }

const LongTermCard = ({ note, setCurrentId }) => {
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

    useEffect(() => {
        setInterval(() => {
          fetch(`${api.base}` + requestCoin)
          .then((res) => res.json())
          .then((result) => {
            setCurrentPrice(result.price)
          })
        }, 30000)
      }, [requestCoin])

    return (
        <ListItem divider={true} >
            <ListItemText
                disableTypography
                primary={
                    <>
                        <Typography className={cardType} gutterBottom variant="h5" component="h2">{(note.coin).toUpperCase()}</Typography>
                        <Typography className={classes.itemTitle} gutterBottom>{note.type}</Typography>
                        <Typography className={classes.itemTitle} gutterBottom>Deposit: {note.deposit}</Typography>
                        <Typography className={classes.itemTitle} gutterBottom>Entry: {note.entry}</Typography>
                        <Typography className={classes.itemTitle}>Current price: {parseFloat(currentPice).toFixed(4)}</Typography>
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
                    </>
                    
                }
            />
        </ListItem>
    )
}

export default LongTermCard