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

    return (
        <ListItem divider={true} className={done ? classes.listItemDone : classes.listItem}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '12px', cursor: 'pointer' }}>list item</Typography>}
                // onClick={() => dispatch(deleteProduct(id))}/>
                onClick={() => onClickItem(id)}/>
        </ListItem>
    )
}

export default LongTermCard