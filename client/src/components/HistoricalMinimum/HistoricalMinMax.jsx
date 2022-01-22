import React, { useState, useEffect } from 'react'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars
import axios from 'axios'

const api = {
    exchange: 'https://api.binance.com/api/v1/exchangeInfo',
    klines: 'https://api.binance.com/api/v3/klines?symbol=',
}

export const HistoricalMinMax = () => {
    // const [coins, setCoins] = useState([])
    const [coinsData, setCoinsData] = useState([])

    const fetchHistoricalMinimumData = () => {
      axios.get(`${api.exchange}`)
      .then((result) => {
        const filteredCoins = result.data.symbols.filter((coin) => coin.symbol.slice(-4) === 'USDT').map((coin) => coin.symbol)
        // setCoins(filteredCoins)
        console.log(filteredCoins.length)
        // const array = ['BTCUSDT', 'ETHUSDT']
        const coinsDataPromises = filteredCoins.map((coin) => fetchCoinData(coin))
        Promise.all(coinsDataPromises).then(results => {
          const data = results.map(result => result[0])
          console.log(data)
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
        return [{coin: coin, max: max}]
      })
    }

    useEffect( () => { fetchHistoricalMinimumData() }, [])

    // console.log(coinsData)

    return (
      !coinsData.length ? <FlapperSpinner /> : (
        <div>
          {coinsData.map((coin) => <div>{coin.coin}:{coin.max}</div>)}
        </div>
    ))
}