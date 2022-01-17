import React from 'react'

const api = {
    base: 'https://api.binance.com/api/v1/exchangeInfo',
  }

  const fetchHistoricalMinimumData = () => {
    fetch(`${api.base}`)
    .then((res) => res.json())
    .then((result) => result.symbols.map((coin) => console.log(coin.symbol)))
  }

export const HistoricalMinMax = () => {
    fetchHistoricalMinimumData()
    return (
        <div>
            Historical Minimum for coins
        </div>
    )
}