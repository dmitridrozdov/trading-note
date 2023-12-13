import React, { useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

import useStyles, { NoteTextField }  from './styles'

export const Forecast = () => {

  const classes = useStyles()
  const [currentSearch, setCurrentSearch] = useState('')
  const [data1d, setData1d] = useState([])

  const api = {
    base: 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d',
  }

  const fetch1DData = () => {
    fetch(`${api.base}`)
    .then((res) => res.json())
    .then((result) => {
      setData1d(result.map((item) => {
        // return {
        //   date: new Date(item[0]),
        //   open: item[1],
        //   high: item[2],
        //   low: item[3],
        //   close: item[4],
        //   volume: item[5],
        // }
        return {open: item[1], close: item[4], volume: item[5]}
      })
      , [])
    })
  }

  const forecast = () => {
    fetch1DData()
  }

  return (
    <Container maxWidth='lg'>
      <Grow in>
        <Grid container spacing={2}>
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

      <Grow in>
        <Container>
          {/* {data1d.map((item) => {
            return (
              <div key={item.date}>
                <p>{item.date}</p>
                <p>{item.open}</p>
                <p>{item.high}</p>
                <p>{item.low}</p>
                <p>{item.close}</p>
                <p>{item.volume}</p>
              </div>
            )
          })} */}
          {/* {data1d.map((item) => <div>open: {item.open.replace(/0+$/, "")} close: {item.close.replace(/0+$/, "")} volume: {item.volume.replace(/0+$/, "")}</div> )} */}
          {data1d.map((item) => <div>{item.open.replace(/0+$/, "")} {item.volume.replace(/0+$/, "")}</div> )}
        </Container>
      </Grow>

    </Container>


  )
}