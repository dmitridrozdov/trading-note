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

    const fetchHistoricalMinimumData = () => {
      axios.get(`${api.exchange}`)
      .then((result) => {
        const filteredCoins = result.data.symbols.filter((coin) => coin.symbol.slice(-4) === 'USDT').map((coin) => coin.symbol)
        // const array = ['BTCUSDT']
        const coinsDataPromises = filteredCoins.map((coin) => fetchCoinData(coin))
        Promise.all(coinsDataPromises).then(results => {
          const data = results.map(result => result[0])
          // console.log(data)
          setCoinsData(data)
        })
      })
    }

    async function fetchCoinData(coin) {
      return await axios.get(`${api.klines}` + coin + '&interval=1d&limit=1000')
      .then((result) => {
        const closePrice = result.data.map((item) => {
          return item[4]
        })
        const max = Math.max(...closePrice)
        const current = closePrice[closePrice.length - 1]
        const diffPercentage = ((current - max) / max) * 100
        console.log('diff ' + diffPercentage)
        return [{coin: coin, max: max, current: current, diffPercentage: diffPercentage}]
      })
    }

    useEffect( () => { fetchHistoricalMinimumData() }, [])

    return (
      !coinsData.length ? <FlapperSpinner /> : (
        <div>
          {/* {coinsData.map((coin) => <div>{coin.coin}   max price: {coin.max}  current price: {coin.current}   diff: {coin.diffPercentage}</div>)} */}
          <table className={classes.styledTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dom</td>
                    <td>6000</td>
                </tr>
                <tr>
                    <td>Melissa</td>
                    <td>5150</td>
                </tr>
            </tbody>
        </table>
        </div>
    ))
}