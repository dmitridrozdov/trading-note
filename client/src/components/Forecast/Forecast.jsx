import React from 'react'

export const Forecast = () => {

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

  // useEffect(() => {
  //   setInterval(() => {
  //     fetchData()
  //   }, 10000)
  // }, [])

  fetchData()

  return (
    <div>
      dsfsf
    </div>
  )
}