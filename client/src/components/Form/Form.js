import React, { useState, useEffect } from 'react'
import useStyles, { CssTextField } from './styles'
// import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, Paper } from '@material-ui/core'
import { createTradingNote, updateTradingNote } from '../../actions/tradingNotes'


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const [agentData, setAgentData] = useState({
        agent: '', address: '', phone: ''
    })
    const agent  = useSelector((state) => currentId ? state.agents.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(agent) setAgentData(agent)
    }, [agent])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updateTradingNote(currentId, agentData))
        } else {
            dispatch(createTradingNote(agentData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setAgentData({agent: '', address: '', phone: ''})
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
                    name='agent' label='Agent' fullWidth
                    value={agentData.agent} onChange={(e) => setAgentData({ ...agentData, agent: e.target.value })}/>
                
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='address' label='Address' fullWidth value={agentData.address} 
                    onChange={(e) => setAgentData({ ...agentData, address: e.target.value })}/>

                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='phone' label='Phone' fullWidth value={agentData.phone} 
                    onChange={(e) => setAgentData({ ...agentData, phone: e.target.value })}/>
                    
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.textStyle} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form