import React from 'react'
import MainPage from './components/MainPage'
import MealInfo from './components/MealInfo'
import { Route ,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:id' element={<MealInfo/>}/>
      </Routes>
    </div>
  )
}

export default App