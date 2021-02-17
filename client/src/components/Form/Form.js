import React, { useState, useEffect } from 'react'
import useStyles, { CssTextField } from './styles'
// import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, Paper } from '@material-ui/core'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        agent: '', names: ''
    })
    const post  = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({agent: '', names: ''})
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
                    value={postData.agent} onChange={(e) => setPostData({ ...postData, agent: e.target.value })}/>
                
                <CssTextField 
                    className={classes.textMargin}
                    InputProps={{
                        className: classes.textStyle
                    }}
                    variant="outlined"
                    name='names' label='Names' fullWidth value={postData.names} 
                    onChange={(e) => setPostData({ ...postData, names: e.target.value.split(',') })}/>
                    
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button className={classes.textStyle} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form