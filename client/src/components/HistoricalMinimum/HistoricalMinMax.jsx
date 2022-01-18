import React, { useState, useEffect } from 'react'
import { FlapperSpinner } from 'react-spinners-kit' //https://bestofreactjs.com/repo/dmitrymorozoff-react-spinners-kit--react-loader-spinners-progress-bars

const api = {
    base: 'https://api.binance.com/api/v1/exchangeInfo',
  }



export const HistoricalMinMax = () => {
    const [coins, setCoins] = useState([])

    const fetchHistoricalMinimumData = () => {
      fetch(`${api.base}`)
      .then((res) => res.json())
      .then((result) => 
        setCoins(result.symbols.filter(
        (coin) => coin.symbol.slice(-4) === 'USDT'))
      )
    }

    useEffect( () => { fetchHistoricalMinimumData() }, [])

    console.log(coins)
    return (
      !coins.length ? <FlapperSpinner /> : (
        <div>
          {coins.map((coin) => <div>{coin.symbol}</div>)}
        </div>
    ))
}