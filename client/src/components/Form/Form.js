import React, { useState, useEffect } from 'react'
import useStyles, { CssTextField } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, Paper } from '@material-ui/core'
import { createTradingNote, updateTradingNote } from '../../actions/tradingNotes'


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const [coinData, setcoinData] = useState({
        coin: '', address: '', phone: ''
    })
    const coin  = useSelector((state) => currentId ? state.coins.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(coin) setcoinData(coin)
    }, [coin])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updateTradingNote(currentId, coinData))
        } else {
            dispatch(createTradingNote(coinData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setcoinData({coin: '', deposit: '', entry: '', stoploss: '', tp1: '', tp2: ''})
    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' className={classes.textStyle}>Add record</Typography>
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='coin' label='coin' fullWidth
                    value={coinData.coin} onChange={(e) => setcoinData({ ...coinData, coin: e.target.value })}/>
                
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='deposit' label='Deposit' fullWidth value={coinData.deposit} 
                    onChange={(e) => setcoinData({ ...coinData, deposit: e.target.value })}/>

                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='entry' label='Entry' fullWidth value={coinData.entry} 
                    onChange={(e) => setcoinData({ ...coinData, entry: e.target.value })}/>

                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='stoploss' label='Stop Loss' fullWidth value={coinData.stoploss} 
                    onChange={(e) => setcoinData({ ...coinData, stoploss: e.target.value })}/>
                
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='tp1' label='Take Profit 1' fullWidth value={coinData.tp1} 
                    onChange={(e) => setcoinData({ ...coinData, tp1: e.target.value })}/>
                
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='tp2' label='Take Profit 2' fullWidth value={coinData.tp2} 
                    onChange={(e) => setcoinData({ ...coinData, tp2: e.target.value })}/>
                    
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.textStyle} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form