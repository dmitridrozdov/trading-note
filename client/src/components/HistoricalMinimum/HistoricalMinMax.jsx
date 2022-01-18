import React, { useState, useEffect } from 'react'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars

const api = {
    exchange: 'https://api.binance.com/api/v1/exchangeInfo',
    klines: 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1000',
}

export const HistoricalMinMax = () => {
    const [coins, setCoins] = useState([])

    const fetchHistoricalMinimumData = () => {
      fetch(`${api.exchange}`)
      .then((res) => res.json())
      .then((result) => 
        setCoins(result.symbols.filter(
        (coin) => coin.symbol.slice(-4) === 'USDT'))
      )
    }

    const fetchCoinData = () => {
      fetch(`${api.klines}`)
      .then((res) => res.json())
      .then((result) => {
        const closePrice = result.map((item) => {
          return item[4]
        })
        const max = Math.max(...closePrice)
        console.log(max)
      })
    }

    useEffect( () => { fetchHistoricalMinimumData() }, [])
    useEffect( () => { fetchCoinData() }, [])

    return (
      !coins.length ? <FlapperSpinner /> : (
        <div>
          {/* {coins.map((coin) => <div>{coin.symbol}</div>)} */}
        </div>
    ))
}