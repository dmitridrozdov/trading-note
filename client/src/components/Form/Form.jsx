import React, { useState, useEffect } from 'react'
import useStyles, { NoteTextField } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, Paper } from '@material-ui/core'
import { createTradingNote, updateTradingNote } from '../../actions/tradingNotes'


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const [noteData, setnoteData] = useState({
        coin: '', type: '', deposit: '', entry: '', stoploss: '', tp: '', closeposition: ''
    })
    const coin  = useSelector((state) => currentId ? state.notes.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(coin) setnoteData(coin)
    }, [coin])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updateTradingNote(currentId, noteData))
        } else {
            dispatch(createTradingNote(noteData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setnoteData({coin: '', type: '', deposit: '', entry: '', stoploss: '', 
                    tp: '', closeposition: ''})
    }
    
    return(
        <Paper className={classes.paper} variant='outlined'>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' className={classes.textStyle}>Add Trading Note</Typography>
                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='coin' label='coin' fullWidth
                    value={noteData.coin} onChange={(e) => setnoteData({ ...noteData, coin: e.target.value })}/>
                
                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='type' label='Type' fullWidth
                    value={noteData.type} onChange={(e) => setnoteData({ ...noteData, type: e.target.value })}/>

                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='deposit' label='Deposit' fullWidth value={noteData.deposit} 
                    onChange={(e) => setnoteData({ ...noteData, deposit: e.target.value })}/>

                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='entry' label='Entry' fullWidth value={noteData.entry} 
                    onChange={(e) => setnoteData({ ...noteData, entry: e.target.value })}/>

                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='stoploss' label='Stop Loss' fullWidth value={noteData.stoploss} 
                    onChange={(e) => setnoteData({ ...noteData, stoploss: e.target.value })}/>
                
                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='tp' label='Take Profit' fullWidth value={noteData.tp} 
                    onChange={(e) => setnoteData({ ...noteData, tp: e.target.value })}/>
                
                <NoteTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    InputLabelProps={{style: {fontSize: '12px'}}}
                    name='closeposition' label='Close Position' fullWidth value={noteData.closeposition} 
                    onChange={(e) => setnoteData({ ...noteData, closeposition: e.target.value })}/>
                    
                <Button className={classes.buttonSubmit} size='small' type='submit' fullWidth >{currentId ? 'Update' : 'Create'} Note</Button>
                <Button className={classes.buttonClear} size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form