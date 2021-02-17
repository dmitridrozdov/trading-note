import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, /*Typography,*/ Grow, Grid } from '@material-ui/core'
// import memories from './images/memories.png'

import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import useStyles, { CssTextField }  from './styles'
import MainTable from './components/MainTable/MainTable'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const [currentSearch, setCurrentSearch] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts(currentSearch))
    }, [dispatch, currentSearch])

    return (
        <Container maxWidth='lg'>
            <AppBar className = {classes.appBar} position='static' color='inherit'>
                {/* <Typography className = {classes.heading} variant='h2' align='center'>Trawin</Typography> */}
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                            <Grid item xs={12} sm={8}>
                                <CssTextField 
                                        className={classes.textMargin}
                                        InputProps={{
                                            className: classes.textStyle
                                        }}
                                        variant="outlined"
                                        name='search' label='Search' fullWidth 
                                        value={currentSearch} 
                                        onChange={(e) => setCurrentSearch(e.target.value)}
                                        />
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
            
            <Grow in>
                <Container>
                    <Grid container justify='space-between' spacing={4}>
                        <Grid item xs={12} sm={8}>
                            <MainTable setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
