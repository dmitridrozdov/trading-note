import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TradingNoteApp } from './components/TradingNoteApp/TradingNoteApp'
import { Forecast } from './components/Forecast/Forecast'
import { HistoricalMinimum } from './components/HistoricalMinimum/HistoricalMinimum'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<TradingNoteApp/>} />
          <Route path='/forecast' element={<Forecast />} />
          <Route path='/minimum' element={<HistoricalMinimum />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
