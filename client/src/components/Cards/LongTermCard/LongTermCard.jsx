import React, { useEffect, useState } from 'react'
import { Card, CardContent, Button, Typography } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deleteTradingNote } from '../../../actions/tradingNotes'
import useStyles from './styles'

const LongTermCard = ({ note, setCurrentId }) => {
  return (
    <div>LongTermCard</div>
  )
}

export default LongTermCard