import React, { useState } from 'react'
import { Container, Grow, Grid, TextField } from '@material-ui/core'
import { Button, Item } from '@material-ui/core'

import useStyles, { NoteTextField }  from './styles'

export const Forecast = () => {

  const classes = useStyles()
  const [currentSearch, setCurrentSearch] = useState('')

  let topDate = new Date(1598400000000); // create Date object
  console.log('date on the top: ' + topDate.toString())

  let bottomDate = new Date(1641513600000); // create Date object
  console.log('date on the bottom: ' + bottomDate.toString())


  let topLimitDate = new Date(1555200000000); // create Date object
  console.log('date on the bottom with limit 1000: ' + topLimitDate.toString())

  // const myDate = new Date('1/06/2019');
  // const longDate = myDate.getTime()
  // console.log('longDate ' + longDate);

  // const newDate = new Date(longDate);
  // console.log('newDate ' + newDate.toString());

  const api = {
    base: 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d',
  }

  const fetchData = () => {
    fetch(`${api.base}`)
    .then((res) => res.json())
    .then((result) => {
      console.info(result)
    })
  }

  const forecast = () => {
    fetchData()
  }

  return (
    <Container maxWidth='lg'>
      <Grow in>
        <Grid container spacing={40}>
          <Grid item xs={8} className={classes.grid}> 
          <div className={classes.span}>
            <NoteTextField 
                className={classes.textMargin}
                InputProps={{
                    className: classes.textStyle
                }}
                name='search' label='Search' fullWidth 
                value={currentSearch} 
                onChange={(e) => setCurrentSearch(e.target.value)}
            />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.grid}>
          <div className={classes.span}>
            <Button className={classes.btnForecast} size='small' onClick={forecast}>Forecast</Button>
            </div>
          </Grid>
        </Grid>
      </Grow>
    </Container>


  )
}