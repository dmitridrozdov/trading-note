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
        setcoinData({coin: '', address: '', phone: ''})
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
                    name='address' label='Address' fullWidth value={coinData.address} 
                    onChange={(e) => setcoinData({ ...coinData, address: e.target.value })}/>

                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='phone' label='Phone' fullWidth value={coinData.phone} 
                    onChange={(e) => setcoinData({ ...coinData, phone: e.target.value })}/>
                    
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.textStyle} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form