import React, { useState } from 'react'
import useStyles from './styles'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import { TextField, Button, Typography, Paper } from '@material-ui/core'
// import { createPost } from '../../api'
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
    }
    
    const clear = () => {
    
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='agent' variant='outlined' label='Agent' fullWidth value={postData.agent} onChange={(e) => setPostData({ ...postData, agent: e.target.value })}/>
                <TextField name='names' variant='outlined' label='Names' fullWidth value={postData.names} onChange={(e) => setPostData({ ...postData, names: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant='container' color='blue' size='large' type='submit' fullWidth >Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form