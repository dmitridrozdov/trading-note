import React, { useState, useEffect } from 'react'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars
import axios from 'axios'
import useStyles from './styles'

const api = {
    exchange: 'https://api.binance.com/api/v1/exchangeInfo',
    klines: 'https://api.binance.com/api/v3/klines?symbol=',
}

export const HistoricalMinMax = () => {
    const [coinsData, setCoinsData] = useState([])
    const classes = useStyles()

    // const fetchHistoricalMinimumData = () => {
    //   axios.get(`${api.exchange}`)
    //   .then((result) => {
    //     const filteredCoins = result.data.symbols.filter((coin) => coin.symbol.slice(-4) === 'USDT').map((coin) => coin.symbol)
    //     // const array = ['BTCUSDT']
    //     const coinsDataPromises = filteredCoins.map((coin) => fetchCoinData(coin))
    //     Promise.all(coinsDataPromises).then(results => {
    //       const data = 
    //         results
    //         .map(result => result[0])
    //         .sort((a, b) => parseFloat(a.ndays) - parseFloat(b.ndays))
    //       // console.log(data)
    //       setCoinsData(data)
    //     })
    //   })
    // }

    async function fetchCoinData(coin) {
      return await axios.get(`${api.klines}` + coin + '&interval=1d&limit=1000')
      .then((result) => {
        const ndays = result.data.length
        const closePrice = result.data.map((item) => {
          return item[4]
        })
        const max = Math.max(...closePrice)
        const current = closePrice[closePrice.length - 1]
        const diffPercentage = (((current - max) / max) * 100).toFixed(2)
        console.log('diff ' + diffPercentage)
        return [{coin: coin, max: max, current: current, diffPercentage: diffPercentage, ndays: ndays}]
      })
    }

    // useEffect( () => { fetchHistoricalMinimumData() }, [])

    useEffect(() => { function fetchHistoricalMinimumData() { 
      axios.get(`${api.exchange}`)
      .then((result) => {
        const filteredCoins = result.data.symbols.filter((coin) => coin.symbol.slice(-4) === 'USDT').map((coin) => coin.symbol)
        // const array = ['BTCUSDT']
        const coinsDataPromises = filteredCoins.map((coin) => fetchCoinData(coin))
        Promise.all(coinsDataPromises).then(results => {
          const data = 
            results
            .map(result => result[0])
            .sort((a, b) => parseFloat(a.ndays) - parseFloat(b.ndays))
          // console.log(data)
          setCoinsData(data)
        })
      })
     } fetchHistoricalMinimumData() }, []) 

    return (
      !coinsData.length ? <FlapperSpinner /> : (
        <div>
          <table className={classes.styledTable}>
            <thead>
                <tr className={classes.styledTableHead}>
                    <th>Coin</th>
                    <th>Max Price</th>
                    <th>Current Difference</th>
                    <th>Days on Exchange</th>
                </tr>
            </thead>
            <tbody>
              {coinsData.map((coin) => 
                <tr className={classes.styledTableTr}>
                  <td className={classes.styledTableCell}>{coin.coin}</td>
                  <td className={classes.styledTableCell}>{coin.max}</td>
                  <td className={classes.styledTableCell}>{coin.diffPercentage}</td>
                  <td className={classes.styledTableCell}>{coin.ndays}</td>
                </tr>
              )}
            </tbody>
        </table>
        </div>
    ))
}