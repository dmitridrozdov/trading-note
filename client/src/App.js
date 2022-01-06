import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TradingNoteApp } from './components/TradingNoteApp/TradingNoteApp'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<TradingNoteApp/>} />
          {/* <Route path="/forcast" exact component={ForcastComponent} /> */}
        </Routes>
      </BrowserRouter>
    )
}

export default App
