import React, { useEffect, useState } from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles'

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
                    </>
                    
                }
            />
        </ListItem>
    )
}

export default LongTermCard