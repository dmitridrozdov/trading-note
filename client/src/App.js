import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid, TextField } from '@material-ui/core'

import { getTradingNotes } from './actions/tradingNotes'
import Form from './components/Form/Form'
import useStyles, { NoteTextField }  from './styles'
import TradingNotes from './components/Cards/TradingNotes'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const [currentSearch, setCurrentSearch] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTradingNotes(currentSearch))
    }, [dispatch, currentSearch])

    return (
        <Container maxWidth='lg'>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                            <Grid item xs={12} sm={8}>
                                <NoteTextField 
                                        className={classes.textMargin}
                                        InputProps={{
                                            className: classes.textStyle
                                        }}
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
                            <TradingNotes setCurrentId={setCurrentId}/>
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
