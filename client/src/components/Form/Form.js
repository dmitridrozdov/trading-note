import React, { useState } from 'react'
import useStyles from './styles'
// import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { createPost  } from '../../actions/posts'


const Form = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        // creator: '', title: '', message: '', tags: '', selectedFile: ''
        agent: '', names: ''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
        // postData.agent = '' //DD: somehow I need to clear after dispatch
    }
    
    const clear = () => {
    
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' className={classes.textStyle}>Add record</Typography>
                <TextField 
                    InputProps={{
                        className: classes.textStyle
                    }}
                    name='agent' label='Agent' fullWidth 
                    value={postData.agent} onChange={(e) => setPostData({ ...postData, agent: e.target.value })}/>
                <TextField 
                    InputProps={{
                        className: classes.textStyle
                    }}
                    // id='filled-basic' variant='filled' 
                    name='names' 
                    label='Names' fullWidth value={postData.names} onChange={(e) => setPostData({ ...postData, names: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.textStyle} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form