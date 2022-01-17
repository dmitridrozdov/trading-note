import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TradingNoteApp } from './components/TradingNoteApp/TradingNoteApp'
import { Forecast } from './components/Forecast/Forecast'
import { HistoricalMinMax } from './components/HistoricalMinimum/HistoricalMinMax'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<TradingNoteApp/>} />
          <Route path='/forecast' element={<Forecast />} />
          <Route path='/minmax' element={<HistoricalMinMax />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
