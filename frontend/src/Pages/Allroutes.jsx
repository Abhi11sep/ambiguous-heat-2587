import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home'


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes